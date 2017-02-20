let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

const BUILD_URL = 'build/resources/main';
const SRC_URL = 'src/main/resources';

gulp.task('default', ['html', 'assets', 'css', 'js']);

gulp.task('html', function () {
    gulp.src('components/*/*.html')
        .pipe(gulp.dest(`${BUILD_URL}/static/components`))
        .pipe(gulp.dest(`${SRC_URL}/static/components`));

    return gulp.src('*.html')
        .pipe(gulp.dest(`${BUILD_URL}/templates`))
        .pipe(gulp.dest(`${SRC_URL}/templates`));
});

gulp.task('assets', function() {
    return gulp.src(['assets/*.ico', 'assets/*.jpg', 'assets/*.png', 'assets/*.svg'])
        .pipe(gulp.dest('build/resources/main/static/assets'))
        .pipe(gulp.dest('src/main/resources/static/assets'));
});

gulp.task('css', function () {
    return gulp.src('styles/style.scss')
        .pipe(sass()) 
        .pipe(gulp.dest(`${BUILD_URL}/static`))
        .pipe(gulp.dest(`${SRC_URL}/static`));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest(`${BUILD_URL}/static`))
        .pipe(gulp.dest(`${SRC_URL}/static`));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('styles/partials/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('components/*/*.html', ['html']);
    gulp.watch('assets/**.*', ['assets']);
});