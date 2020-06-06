var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src('./static/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/styles'));

    done();
})