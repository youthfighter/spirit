var gulp = require('gulp')
var order = require('gulp-order')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var config = require('../config')

gulp.task('script', function(){
    return gulp.src(config.script.libs)
        .pipe(order(config.script.order), { base: config.script.base })
        .pipe(concat(config.script.build))
        /* .pipe(uglify()) */
        .pipe(gulp.dest(config.style.dist))
})