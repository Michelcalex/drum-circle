let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

gulp.task('default', ['html', 'assets', 'css', 'js']);

gulp.task('html', function () {
    gulp.src('components/*/*.html')
        .pipe(gulp.dest('public/templates'));

    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('assets', function() {
    return gulp.src(['assets/*.ico', 'assets/*.jpg', 'assets/*.png'])
        .pipe(gulp.dest('public/assets'));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('components/*/*.html', ['html']);
    gulp.watch('assets/**.*', ['assets']);
});