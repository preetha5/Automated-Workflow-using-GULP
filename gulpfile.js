var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    browserify = require('gulp-browserify');

var coffee_src = ['components/coffee/tagline.coffee'];
var js_src = ['components/scripts/rclick.js',
             'components/scripts/pixgrid.js',
              'components/scripts/tagline.js',
              'components/scripts/template.js',
             ];

var sass_src = ['components/sass/styles.scss']

gulp.task('coffee', function(){
    gulp.src(coffee_src)
    .pipe(coffee({bare: true})
        .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts')) 
});

gulp.task('js', function(){
    gulp.src(js_src)
    .pipe(concat('scripts.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function(){
    gulp.src(sass_src)
    .pipe(compass({
        sass:'components/sass',
        image:'builds/development/images',
        style:'expanded'
    }))
    .on('error',gutil.log)
    .pipe(gulp.dest('builds/development/css'))
});