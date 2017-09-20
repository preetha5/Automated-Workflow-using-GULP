var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffee_src = ['components/coffee/tagline.coffee'];
gulp.task('coffee', function(){
    gulp.src(coffee_src)
    .pipe(coffee({bare: true})
        .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts')) 
});