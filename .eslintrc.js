'use strict';

var deepExtend = require('deep-extend');
var configuration = require('./configurations/es5');

module.exports = deepExtend(configuration, {
  env: {
    node: true
  }
});
