'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  return gulp.src('scripts/index.js').pipe(jshint('.jshintrc')).pipe(jshint.reporter('default'));
});

gulp.task('default', function() {

});
