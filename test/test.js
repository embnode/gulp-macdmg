/* jshint node: true */
/* global describe, it */

'use strict';

var macdmg = require('../');
var gulp = require('gulp');

require('mocha');

describe('gulp-macdmg', function() {

  it('default test', function(done) {
    var errored = false;

    gulp.src(["."])
      .pipe(macdmg({
        source: 'test/res/appdmg.json',
        target: 'test/build/app.dmg'
      }))
      .on('end', function() {
        if (!errored) {
          done();
        }
      })
      .on('error', function(err) {
        errored = true;
        done(err);
      });
  });

});
