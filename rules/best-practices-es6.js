/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/best-practices-es6
 * @see http://eslint.org/docs/rules/#best-practices
 */

'use strict';

var _ = require('lodash');
var bestPracticesES5 = require('./best-practices-es5');

module.exports = _.defaults({
  rules: {
    // Allow reassignment of function parameters (off by default)
    'no-param-reassign': 0
  }
}, bestPracticesES5);
