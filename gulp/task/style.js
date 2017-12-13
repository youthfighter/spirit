var gulp = require('gulp')
var clean = require('gulp-copy')
var concat = require('gulp-concat')
var config = require('../config')

gulp.task('style', function(){
    return gulp.src(config.style.src)
        .pipe(concat(config.style.build))
        .pipe(gulp.dest(config.style.dist))
})