var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var slim = require("gulp-slim");

gulp.task("server", function() {
    browser({
        proxy: "vccw.dev"
    });
});

gulp.task('php-reload', function () {
    gulp.src("www/**/*.php")
    .pipe(browser.reload({stream:true}))
});

gulp.task('watch', function () {
    gulp.watch("www/**/*.php",["php-reload"]);
});

gulp.task("default", ['server' , 'watch'] );

/*--------------------- slim [slim] --------------------*/
gulp.task('slim', function() {
  gulp.src("./app/views/**/*.slim")
    .pipe(plumber())
    .pipe(slim({
      pretty: true,
    }))
    .pipe(gulp.dest('./www/wordpress/wp-content/themes/sample_theme/'))
    .pipe(browser.reload({stream:true}));
});
