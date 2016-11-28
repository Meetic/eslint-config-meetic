/**
 * These rules are specific to JavaScript running on Node.js.
 * @module rules/node
 * @see http://eslint.org/docs/rules/#nodejs
 */

'use strict';

module.exports = {
  rules: {
    // Require return statements after callbacks
    'callback-return': [2, ['callback', 'cb', 'done', 'next']],
    // Don't require require() calls to be placed at top-level module scope
    'global-require': 0,
    // Enforce error handling in callbacks
    'handle-callback-err': [2, '^.*(e|E)rr(or)?$'],
    // Disallow mixing regular variable and require declarations (off by default) (on by default in the node env)
    'no-mixed-requires': 2,
    // Disallow use of new operator with the require function (off by default) (on by default in the node env)
    'no-new-require': 2,
    // Disallow string concatenation with __dirname and __filename (off by default) (on by default in the node env)
    'no-path-concat': 2,
    // Disallow use of process.env
    'no-process-env': 2,
    // Disallow process.exit()
    'no-process-exit': 2,
    // Allow usage of all node modules
    'no-restricted-modules': 0,
    // Disallow use of synchronous methods
    'no-sync': 2
  }
};
