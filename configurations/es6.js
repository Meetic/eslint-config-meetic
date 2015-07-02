/**
 * ECMAScript-6 configuration.
 * @module configurations/es6
 */

'use strict';

var deepExtend = require('deep-extend');

module.exports = deepExtend(
  {},
  require('./es5.js'),
  require('../rules/ecmascript-6.js'),
  require('../rules/best-practices-es6.js'),
  require('../rules/stylistic-issues-es6.js')
);
