/**
 * These rules have to do with variable declarations.
 * @module rules/variables
 * @see http://eslint.org/docs/rules/#variables
 */

'use strict';

module.exports = {
  rules: {
    // Disallow the catch clause parameter name being the same as a variable in the outer scope
    // (off by default in the node env)
    'no-catch-shadow': 2,
    // Disallow deletion of variables
    'no-delete-var': 2,
    // Disallow labels that share a name with a variable
    'no-label-var': 2,
    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // Disallow use of undefined when initializing variables
    'no-undef-init': 2,
    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // Disallow use of undefined variable (off by default)
    'no-undefined': 2,
    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': 2,
    // Disallow use of variables before they are defined
    'no-use-before-define': 2
  }
};
