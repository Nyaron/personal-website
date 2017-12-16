const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const util = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

var paths = {
  vendors: ['node_modules/jquery/dist/jquery.min.js', 
  			'node_modules/popper.js/dist/umd/popper.min.js', 
  			'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  			'node_modules/vue/dist/vue.min.js'],
  scripts: 'app/index.js',
  styles: 'styles/main.scss'
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('sass', ['clean'], function(){
    return gulp.src('styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'))
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('vendors', ['clean'], function() {
  return gulp.src(paths.vendors)
  	.pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['sass', 'vendors', 'scripts']);