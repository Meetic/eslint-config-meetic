/**
 * These rules are specific to JavaScript running on Node.js.
 * @module rules/node
 * @see http://eslint.org/docs/rules/#nodejs
 */

'use strict';

module.exports = {
  rules: {
    // Enforces error handling in callbacks (off by default) (on by default in the node environment)
    'handle-callback-err': [2, '^.*(e|E)rr(or)?$'],
    // Disallow mixing regular variable and require declarations (off by default) (on by default in the node env)
    'no-mixed-requires': 2,
    // Disallow use of new operator with the require function (off by default) (on by default in the node env)
    'no-new-require': 2,
    // Disallow string concatenation with __dirname and __filename (off by default) (on by default in the node env)
    'no-path-concat': 2,
    // Disallow process.exit() (on by default in the node environment)
    'no-process-exit': 2,
    // Restrict usage of specified node modules (off by default)
    'no-restricted-modules': 0,
    // Disallow use of synchronous methods (off by default)
    'no-sync': 2
  }
};
