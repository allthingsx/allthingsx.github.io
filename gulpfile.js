"use strict";

var      gulp = require('gulp'),
       rename = require('gulp-rename'),
         sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
 autoprefixer = require('gulp-autoprefixer'),
         nano = require('gulp-cssnano'),
         maps = require('gulp-sourcemaps');

 gulp.task('compileSass', function() {
  return gulp.src("./sass/main.scss")
      .pipe(maps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
      .pipe(nano())
      .pipe(rename('styles.min.css'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

gulp.task('watchFiles', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch('./sass/**/*.scss', ['compileSass']);
  gulp.watch('js/*.js');
})

gulp.task('watch', ['watchFiles']);
