// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');

// require(d) gulp for compatibility with sublime-gulp.
var gulp = require('gulp');