var gulp = require('gulp');
var jade = require('gulp-jade');

var plumber = require('gulp-plumber');

var jadePath = 'src/jade/*.jade';

gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src(jadePath)
		.pipe(plumber())
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty: '\t'
		}))
		.pipe(gulp.dest('www'))
});

gulp.task('watch', function(){
	gulp.watch(jadePath,['jade'])
});
