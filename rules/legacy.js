/**
 * The following rules are included for compatibility with JSHint and JSLint.
 * While the names of the rules may not match up with the JSHint/JSLint
 * counterpart, the functionality is the same.
 * @module rules/legacy
 * @see http://eslint.org/docs/rules/#legacy
 */

'use strict';

module.exports = {
  rules: {
    // Specify the maximum depth that blocks can be nested (off by default)
    'max-depth': [2, 4],
    // Specify the maximum length of a line in your program (off by default)
    'max-len': [2, 120, 2],
    // Limits the number of parameters that can be used in the function declaration. (off by default)
    'max-params': [2, 10],
    // Specify the maximum number of statement allowed in a function (off by default)
    'max-statements': [2, 15],
    // Disallow use of bitwise operators (off by default)
    'no-bitwise': 2,
    // Disallow use of unary operators, ++ and -- (off by default)
    'no-plusplus': 2
  }
};
