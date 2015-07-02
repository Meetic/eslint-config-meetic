/**
 * These rules are only relevant to ES6 environments and are off by default.
 * @module rules/ecmascript-6
 * @see http://eslint.org/docs/rules/#ecmascript-6
 */

'use strict';

module.exports = {
  rules: {
    // Verify super() callings in constructors (off by default)
    'constructor-super': 2,
    // Enforce the spacing around the * in generator functions (off by default)
    'generator-star-spacing': [2, 'after'],
    // Disallow to use this/super before super() calling in constructors. (off by default)
    'no-this-before-super': 2,
    // Require let or const instead of var (off by default)
    'no-var': 2,
    // Require method and property shorthand syntax for object literals (off by default)
    'object-shorthand': [2, 'always'],
    // Suggest using of const declaration for variables that are never modified after declared (off by default)
    'prefer-const': 2
  }
};
