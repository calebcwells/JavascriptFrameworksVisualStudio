var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create();

gulp.task('clean', function () {
    del(config.app + '*');
});

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'localhost:32000'
    });

    gulp.watch(config.root + 'app/*.js', browserSync.reload);
    gulp.watch('./Views/**/*.cshtml', browserSync.reload);
});

var config = {
    root: './wwwroot/',
    app: './wwwroot/app/'
};