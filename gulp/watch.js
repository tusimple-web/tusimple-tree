'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', function () {

  gulp.watch([path.join(conf.paths.example, '/*.html'), 'bower.json']);

  gulp.watch([
    path.join(conf.paths.example, '/**/*.css'),
    path.join(conf.paths.example, '/**/*.scss')
  ], function(event) {
      gulp.start('styles');
  });

  gulp.watch(path.join(conf.paths.example, '/**/*.js'), function(event) {
      gulp.start('example');
  });

  gulp.watch(path.join(conf.paths.dist, '/tusimple-tree.js'), function(event) {
      gulp.start('refresh');
  });

  gulp.watch(path.join(conf.paths.src, '/**/*.html'), function(event) {
      gulp.start('templatecache');
  });

  gulp.watch(path.join(conf.paths.src, '/**/*.js'), function(event) {
      gulp.start('concat');
  });

  gulp.watch(path.join(conf.paths.example, '/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
