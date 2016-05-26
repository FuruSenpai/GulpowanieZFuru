// Add variables to Gulp

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');
    
//.end variables
    
//Gulp make http server 

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//.end of http server

//Gulp learn Jade

gulp.task('jade', function() {
    gulp.src('./jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
});

//.end of learn Jade

//Gulp learn Sass

gulp.task('sass', function() {

    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//Gulp watch Sass

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

//.end watch Sass

//.end of learn Sass

gulp.task('default', ['connect', 'jade', 'sass']);
