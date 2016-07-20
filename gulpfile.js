var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        proxy: "vccw.dev"
    });
});

gulp.task('php-reload', function () {
    gulp.src("src/**/*.php")
    .pipe(cache( 'php-reload' ))
    .pipe(browser.reload({stream:true}))
    .pipe(notify({
        title: 'HTMLの変更、ブラウザリロード。',
        message: new Date(),
        sound: 'Submarine',
        icon: 'logo.png'
    }));
});

gulp.task('watch', function () {
    gulp.watch("www/**/*.php",["php-reload"]);
});

gulp.task("default", ['server' , 'watch'] );
