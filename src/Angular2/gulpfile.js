var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create();

gulp.task('clean', function () {
    del(config.app + '*');
});

gulp.task("favicon", function () {
    gulp.src(config.favicon)
        .pipe(gulp.dest(config.root));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'localhost:32000'
    });

    gulp.watch(config.root + 'app/*.js', browserSync.reload);
    gulp.watch('./Views/**/*.cshtml', browserSync.reload);
});

var config = {
    favicon: "Content/images/favicon.ico",
    root: './wwwroot/',
    app: './wwwroot/app/'
};