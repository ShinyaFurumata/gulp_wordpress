var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var slim = require("gulp-slim");
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var cache = require('gulp-cached');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require("gulp-autoprefixer");
var bower = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var changed  = require('gulp-changed');

gulp.task("server", function() {
    browser({
        proxy: "vccw.dev"
    });
});

gulp.task('php-reload', function () {
    gulp.src("www/**/*.slim")
    .pipe(browser.reload({stream:true}))
});

/*--------------------- bower [bower] --------------------*/
gulp.task('bower', function() {
  var jsDir = './app/javascripts/',
      jsFilter = gulpFilter('**/*.js', {restore: true});
  return gulp.src( bower({
      paths: {
        bowerJson: 'bower.json'
      }
    }) )
    .pipe( jsFilter )
    .pipe( concat('_bundle.js') )
    .pipe( gulp.dest(jsDir) )
    .pipe( uglify({
      // !から始まるコメントを残す
      preserveComments: 'some'
    }) )
    .pipe( rename({
      extname: '.min.js'
    }) )
    .pipe( gulp.dest('./www/wordpress/wp-content/themes/sample_theme/js') )
    .pipe( jsFilter.restore );
});

/*--------------------- slim [slim] --------------------*/
gulp.task('slim', function() {
  gulp.src("./app/views/**/*.slim")
    .pipe(plumber())
    .pipe(cache( 'slim' ))
    .pipe(slim({
      pretty: true,
      require: 'slim/include',
      options: 'include_dirs=["./app/views/partial"]'
    }))
    .pipe(rename({
      extname: '.php'
    }))
    .pipe( replace( '&lt;?php bloginfo(&#39;template_url&#39;); ?&gt;', '<?php bloginfo("template_url"); ?>' ) )
    .pipe( replace( '&lt;?php bloginfo( &#39;stylesheet_url&#39; ); ?&gt;', '<?php bloginfo("stylesheet_url"); ?>' ) )
    .pipe( replace( '&lt;?php echo home_url(); ?&gt;', '<?php echo home_url(); ?>' ) )
    .pipe(gulp.dest('./www/wordpress/wp-content/themes/sample_theme/'))
    .pipe(browser.reload({stream:true}));
});

/*--------------------- sass [sass] --------------------*/
gulp.task("sass", function() {
  gulp.src("./app/stylesheets/style.sass")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({pretty: true}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./www/wordpress/wp-content/themes/sample_theme/"))
    .pipe(browser.reload({stream:true}));
    });

/*--------------------- JavaScript [jsmin] --------------------*/
gulp.task("jsmin", function() {
    gulp.src("./app/javascripts/*.js")
        .pipe(changed( 'jsmin' ))
        .pipe(plumber())
        .pipe(uglify())
        .pipe( rename({
          extname: '.min.js'
        }) )
        .pipe(gulp.dest("./www/wordpress/wp-content/themes/sample_theme/js/"))
        .pipe(browser.reload({stream:true}))
});


gulp.task('watch', function () {
    gulp.watch("www/**/*.slim",["slim-reload"]);
    gulp.watch("./app/views/**/*.slim",["slim"]);
    gulp.watch("./app/**/*.sass", ['sass']);
    gulp.watch("./app/javascripts/*.js", ['jsmin']);
});

gulp.task("default", ['server' , 'watch' , 'slim' , 'sass' , 'bower'] );
