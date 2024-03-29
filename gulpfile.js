var gulp = require('gulp');
var jscs = require('gulp-jscs');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');
var Karma = require('karma');
var ghPages = require('gulp-gh-pages');
var webserver = require('gulp-webserver');

gulp.task('babel', function () {
  browserify({
    debug: true
  })
  .require('./src/js/app.js', { entry: true })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['babel']);
  gulp.watch(['./src/scss/*.scss'], ['sass']);
  gulp.watch(['./src/index.html'], ['copy']);
});

gulp.task('copy', function () {
  gulp.src('./src/img/**/*')
    .pipe(gulp.dest('dist/img/'));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('test', function (done) {
  new Karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html'
    }));
});


gulp.task('default', [
  'watch',
  'babel',
  'sass',
  'copy'
  ]
);
