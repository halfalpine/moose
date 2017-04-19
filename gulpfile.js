var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Dirk');
});

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/sass/**/*.sass', ['sass']);;
  gulp.watch('app/*.html', browserSync.reload());
});
