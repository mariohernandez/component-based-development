/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include kss
//=======================================================
var kss = require('kss');

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var path    = require('path');
var sass    = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');
var rename  = require('gulp-rename');
var sync    = require('browser-sync');

// Export our tasks.
module.exports = {

  // Generate the style guide using the top level
  // directory name passed in as a parameter.
  generate: function(dirname) {

    return kss({
      source: [
        dirname + '/src/global',
        dirname + '/src/components',
        dirname + '/src/layout'
      ],
      destination: dirname + '/dist/style-guide',
      builder: dirname + '/src/style-guide/builder',
      namespace: 'nitflex_dev_theme:' + dirname + '/src/components/',
      'extend-drupal8': true,
      // The css and js paths are URLs, like '/misc/jquery.js'.
      // The following paths are relative to the generated style guide.
      // The all.css file is for the style guide ONLY so you don't have to
      // keep adding the file here everytime you add a new component.
      // Drupal libraries should be leveraged for adding CSS per component.
      css: [
      ],
      js: [
      ],
      homepage: 'style-guide.md',
      title: 'Style Guide',
      custom: ['Layout', 'Classes']
    });
  },

  // Compile style guide Sass.
  sass: function() {
    return gulp.src('./src/style-guide/builder/kss-assets/**/*.scss')
      .pipe(sass({ outputStyle: 'nested' })
        .on('error', sass.logError))
      .pipe(prefix({
        browsers: [
          'last 2 versions',
          'IE >= 10'
        ],
        cascade: false
      }))
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./src/style-guide/builder/kss-assets'))
      .pipe(sync.stream({match: '**/*.css'}));
  }
};
