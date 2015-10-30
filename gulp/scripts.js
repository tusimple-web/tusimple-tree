'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
    return gulp.src(path.join(conf.paths.example, '/**/*.js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size());
});

gulp.task('refresh', function() {
    return gulp.src(path.join(conf.paths.dist, '/tusimple-tree.directive.js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size());
});

gulp.task('concat', function() {
    return gulp.src(path.join(conf.paths.src, '/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.concat('tusimple-tree.directive.js'))
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});