/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues-es6
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

'use strict';

var _ = require('lodash');
var stylisticIssuesES5 = require('./stylistic-issues-es5');

module.exports = _.defaults({
  rules: {
    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 2
  }
}, stylisticIssuesES5);
