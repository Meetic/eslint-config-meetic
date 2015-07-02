/**
 * ECMAScript-6 configuration.
 * @module configurations/es6
 */

'use strict';

var _ = require('lodash');

module.exports = _.assign(
  {},
  require('./es5.js'),
  require('../rules/ecmascript-6.js'),
  require('../rules/best-practices-es6.js'),
  require('../rules/stylistic-issues-es6.js')
);
