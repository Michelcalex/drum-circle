let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

const BUILD_URL = 'build/resources/main/static';
const SRC_URL = 'src/main/resources/static';

gulp.task('default', ['html', 'assets', 'css', 'js']);

gulp.task('html', function () {
    gulp.src('components/*/*.html')
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));

    return gulp.src('*.html')
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('assets', function() {
    return gulp.src(['assets/*.ico', 'assets/*.jpg', 'assets/*.png'])
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('css', function () {
    return gulp.src('styles/style.scss')
        .pipe(sass()) 
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        //note you took browersify out
        .pipe(gulp.dest(BUILD_URL))
        .pipe(gulp.dest(SRC_URL));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('components/*/*.html', ['html']);
    gulp.watch('assets/**.*', ['assets']);
});