var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var slim = require("gulp-slim");
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var cache = require('gulp-cached');

gulp.task("server", function() {
    browser({
        proxy: "vccw.dev"
    });
});

gulp.task('php-reload', function () {
    gulp.src("www/**/*.slim")
    .pipe(browser.reload({stream:true}))
});

gulp.task('watch', function () {
    gulp.watch("www/**/*.slim",["slim-reload"]);
    gulp.watch("./app/views/**/*.slim",["slim"]);
});

gulp.task("default", ['server' , 'watch'] );

/*--------------------- slim [slim] --------------------*/
gulp.task('slim', function() {
  gulp.src("./app/views/**/*.slim")
    .pipe(plumber())
    .pipe(cache( 'slim' ))
    .pipe(slim({
      pretty: true,
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
