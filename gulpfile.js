var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffee_src = ['components/coffee/tagline.coffee'];
var js_src = ['components/scripts/rclick.js',
             'components/scripts/pixgrid.js',
              'components/scripts/tagline.js',
              'components/scripts/template.js',
             ];

gulp.task('coffee', function(){
    gulp.src(coffee_src)
    .pipe(coffee({bare: true})
        .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts')) 
});

gulp.task('js', function(){
    gulp.src(js_src)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('builds/development/js'))
});