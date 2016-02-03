var gulp = require('gulp');
var rollup = require('gulp-rollup');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bundle', () => gulp.src('src/main.js', { read: false })
  .pipe(rollup({
    sourceMap: true
  }))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest('dist')));