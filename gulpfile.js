(function() {
  // esversion: 6
  'use strict';
  // https://www.npmjs.com/package/gulp-sass
  let gulp = require('gulp'),
      //gutil = require('gulp-util'),
      filesize = require('gulp-filesize'),
      // dest = require('gulp-dest'), https://www.npmjs.com/package/gulp-dest
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      minifycss = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
      del = require('del'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload;
      //path = require('path'),
      //shell = require('gulp-shell');


  let match = {
    recurse: '**/*'
  };

  let root = './',
      src = './src/',
      tmp = './.tmp/',
      tmpBuild = tmp + 'build/',
      dist = './dist/';

  let srcAll = src + match.recurse,
      tmpAll = tmpBuild + match.recurse,
      distAll = dist + match.recurse,
      sassAll = srcAll + '.scss',
      classesAll = srcAll + 'classes.scss',
      attrsAll = srcAll + 'attrs.scss',
      distClasses = dist + 'classes',
      distAttrs = dist + 'attrs',
      distMaps = dist + 'maps';

  let sassConf = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  // NOTE: using core & nonCore provides a way to order concatonated files,
  // which is helpful to ensure certain rules don't override others.
  // for example: 'grow' must be decared after 'flex' in the build output
  // core represents the main framework of about 10kb of css (before min)
  let core = [
    'flex-layout',
    'flex-axis',
    'flex-grow',
    'flex-order',
    'flex-media-query',
    'flex-bugfix'
  ];
  // nonCore are optional due to providing only syntax sugar, or being
  // naturally larger in file size.
  let nonCore = [
    'flex-resize',
    'flex-axis-shorthand',
    'spacers'
  ];

  // for concat + min from the dist in a particular order
  let distCoreClassPaths = core.map((str) => {
    return dist + 'classes/' + str + '.classes.css';
  }),
  distCoreAttrsPaths = core.map((str) => {
    return dist + 'attrs/' + str + '.attrs.css';
  });

  let distNonCoreClassPaths = nonCore.map((str) => {
    return dist + 'classes/' + str + '.classes.css';
  }),
  distNonCoreAttrsPaths = nonCore.map((str) => {
    return dist + 'attrs/' + str + '.attrs.css';
  });

  gulp.task('clean', () => {
    return del([distAll, tmpAll], (err, paths) => {
      return gutil.log('cleaned files/folders:\n', paths.join('\n'), gutil.colors.green());
    });
  });

  // NOTE: gulp.dest can be used multiple times:
  // https://gulp.readme.io/docs/gulpdestpath-options
  gulp.task('sass-classes', ['clean'], () => {
    return gulp
      .src(classesAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(rename({
        dirname: ''
      }))
      .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(distClasses))
      .pipe(filesize());
  });

  gulp.task('sass-attrs', ['clean'], () => {
    return gulp
      .src(attrsAll)
      .pipe(sass(sassConf).on('error', sass.logError))
      .pipe(rename({
        dirname: ''
      }))
      .pipe(autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(distAttrs))
      .pipe(filesize());
  });

  gulp.task('sass-all', ['sass-classes', 'sass-attrs']);

  gulp.task('min-classes-core', ['sass-classes'], () => {
    return gulp
      .src(distCoreClassPaths)
      .pipe(concat('layout.flex.classes.core.css'))
      //.pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });
  gulp.task('min-attrs-core', ['sass-classes'], () => {
    return gulp
      .src(distCoreAttrsPaths)
      .pipe(concat('layout.flex.attrs.core.css'))
      //.pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });

  gulp.task('min-classes-all', ['sass-classes'], () => {
    return gulp
      //.src(distClasses + match.recurse)
      .src(distCoreClassPaths.concat(distNonCoreClassPaths))
      .pipe(concat('layout.flex.classes.all.css'))
      //.pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });

  gulp.task('min-attrs-all', ['sass-attrs'], () => {
    return gulp
      //.src(distAttrs + match.recurse)
      .src(distCoreAttrsPaths.concat(distNonCoreAttrsPaths))
      .pipe(concat('layout.flex.attrs.all.css'))
      //.pipe(minifycss({compatibility: 'ie8'}))
      .pipe(gulp.dest(dist));
  });

  gulp.task('min', [ 'min-classes-all', 'min-attrs-all', 'min-classes-core', 'min-attrs-core'], () => {
    console.log('MINIFICATION OFF FOR DEBUGGING', '');
  });

  // watch all sass files and re-run the min
  gulp.task('watch', () => {
    gulp.watch(sassAll,['min']);
  });

  gulp.task('serve', () => {
    console.log('SERVING DEMOS');
    browserSync({
      server: {
        baseDir: './'
      }
    });
    // gulp.watch('demos');
  });

  gulp.task('default', ['min']);
  // TODO: get the flex-resize-fix & check phillip waltons posts!
  // TODO: prob need to build something & test in IE, etc...
  // TODO: SPACERS

})();
