'use strict';

var gulp = require('gulp'),
	 sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./dev/sass/**/*.scss')
				.pipe(sass().on('error', sass.logError))
				// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./dev/sass/**/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'sass:watch']);