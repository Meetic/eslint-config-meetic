/**
 * ECMAScript-5 configuration.
 * @module configurations/es5
 */

'use strict';

var deepExtend = require('deep-extend');

module.exports = deepExtend(
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
