var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

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
