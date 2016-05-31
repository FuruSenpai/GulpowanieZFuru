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
    
    return gulp.src('./jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

//.end of learn Jade

//Gulp learn Sass

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

//.end of Learn Sass

gulp.task('watch', function() {
    gulp.watch(['./jade/**/*.jade'], ['jade']);
    gulp.watch(['./sass/**/*.scss'], ['sass']);
    
});

gulp.task('default', ['connect', 'watch', 'jade', 'sass']);
