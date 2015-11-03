'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('example', function() {
    return gulp.src(path.join(conf.paths.example, '/**/*.js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size());
});

gulp.task('refresh', function() {
    return gulp.src(path.join(conf.paths.dist, '/tusimple-tree.js'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe($.size());
});

gulp.task('templatecache', function() {
    return gulp.src(path.join(conf.paths.src, '/**/*.html'))
    .pipe($.angularTemplatecache({
      module: 'tusimpleTree'
    }))
    .pipe(gulp.dest(path.join(conf.paths.src, '/template-js/')));
});

gulp.task('concat', function() {
    return gulp.src(path.join(conf.paths.src, '/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.concat('tusimple-tree.js'))
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe(browserSync.reload({
            stream: true
        }));
});