/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues-es6
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

'use strict';

var deepExtend = require('deep-extend');

var stylisticIssuesES5 = require('./stylistic-issues-es5');
var stylisticIssuesES6 = {
  rules: {
    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 2
  }
};

module.exports = deepExtend(
  stylisticIssuesES5,
  stylisticIssuesES6
);
