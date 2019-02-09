/*eslint strict: ["error", "global"]*/
'use strict';

//-----------------------------
// Include kss
//-----------------------------
// var kss = require('kss');

//-----------------------------
// Include gulp
//-----------------------------
var gulp = require('gulp');

//-----------------------------
// Include Our Plugins
//-----------------------------
var shell = require('gulp-shell');

// Export our tasks.
module.exports = {

  generate: function() {

    return gulp.src('./', {read: false})
      .pipe(shell([
        'php patternlab/core/console --generate'
      ]));
  }
};
