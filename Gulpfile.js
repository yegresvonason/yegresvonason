'use strict';

var gulp = require('gulp'),
	 sass = require('gulp-sass'),
	 autoprefixer = require('gulp-autoprefixer'),
	 htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
	return gulp.src('./dev/sass/**/*.scss')
				.pipe(sass().on('error', sass.logError))
				// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(gulp.dest('./dev/css/'));
});

gulp.task('autoprefixer', () => 
	gulp.src('./dev/css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'))
);

gulp.task('minify', () => {
	return gulp.src('dev/*.html')
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
	gulp.watch('./dev/sass/**/*.scss', ['sass', 'autoprefixer']);
	gulp.watch('./dev/*.html', ['minify']);
});
gulp.task('default', ['sass', 'autoprefixer', 'minify', 'watch']);