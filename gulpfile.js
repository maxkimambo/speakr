var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch'); 


var jsfiles = ['test/**/*.js', 'server/**/*.js', 'lib/**/*.js']; 

// jshint files
gulp.task('jshint', function() {
    gulp.src(['test/**/*.js', 'models/**/*.js', 'lib/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('css', function(){
	return gulp.src('bower_components/**/*.css')
			.pipe(gulp.dest('public/stylesheets/')); 
}); 

gulp.task('copy', function(){
  return gulp.src('bower_components/**/*.{ttf,woff,eot,svg}')
    .pipe(gulp.dest('public')); 
}); 

// gulp.task('test', function() {
//     gulp.src('lib/**/test/**/*.js')
//         .pipe(mocha({ reporter: 'spec' }));
// });

gulp.task('watch', function(){
    gulp.watch(jsfiles, ['jshint', 'test']); 
}); 

// default task 
gulp.task('default', ['watch']); 