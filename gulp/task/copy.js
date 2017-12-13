var gulp = require('gulp')
var clean = require('gulp-copy')
var concat = require('gulp-concat')
var config = require('../config')

gulp.task('copy', function(){
    gulp.src('libs/ydui.flexible.js')
        .pipe(gulp.dest(config.copy.dist))
    return gulp.src('libs/ydui.js')
        .pipe(gulp.dest(config.copy.dist))
})