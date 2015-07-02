/**
 * ECMAScript-5 configuration.
 * @module configurations/es5
 */

'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {
    env: {},
    ecmaFeatures: {},
    globals: {},
    rules: {}
  },
  require('../rules/best-practices-es5.js'),
  require('../rules/possible-errors.js'),
  require('../rules/legacy.js'),
  require('../rules/node.js'),
  require('../rules/strict-mode.js'),
  require('../rules/stylistic-issues-es5.js'),
  require('../rules/variables.js')
);
