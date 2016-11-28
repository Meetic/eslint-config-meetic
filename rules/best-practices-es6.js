/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/best-practices-es6
 * @see http://eslint.org/docs/rules/#best-practices
 */

'use strict';

var deepExtend = require('deep-extend');

var bestPracticesES5 = require('./best-practices-es5');
var bestPracticesES6 = {
  rules: {
    // Allow reassignment of function parameters (off by default)
    'no-param-reassign': 0,
    // Enforce that class methods utilize this
    'class-methods-use-this': 2
  }
};

module.exports = deepExtend(
  bestPracticesES5,
  bestPracticesES6
);
