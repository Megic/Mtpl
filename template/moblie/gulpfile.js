/****Megic project config***/
var gulp=require('gulp');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css')

var oPaths = {js:'dev/js/*.js', css:'dev/css/*.css', img: 'dev/img/*'};
var iPaths = {js:'public/js', css:'public/css', img: 'public/img'};

gulp.task('scripts', function () {
    gulp.src(oPaths.js)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(iPaths.js));
});

gulp.task('css', function () {
          gulp.src(oPaths.css)
        .pipe(concat('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(iPaths.css));
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(oPaths.img)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(iPaths.img));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(oPaths.js, ['scripts']);
  gulp.watch(oPaths.css, ['css']);
  gulp.watch(oPaths.img, ['images']);
});

gulp.task('default', ['scripts','images','css','watch']);