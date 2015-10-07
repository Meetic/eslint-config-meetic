/**
 * These rules are only relevant to ES6 environments and are off by default.
 * @module rules/ecmascript-6
 * @see http://eslint.org/docs/rules/#ecmascript-6
 * @see http://eslint.org/docs/user-guide/configuring
 */

'use strict';

module.exports = {
  ecmaFeatures: {
    // Enable arrow functions
    'arrowFunctions': true,
    // Enable binary literals
    'binaryLiterals': true,
    // Enable let and const (aka block bindings)
    'blockBindings': true,
    // Enable classes
    'classes': true,
    // Enable default function parameters
    'defaultParams': true,
    // Enable destructuring
    'destructuring': true,
    // Enable for-of loops
    'forOf': true,
    // Enable generators
    'generators': true,
    // Enable modules and global strict mode
    'modules': true,
    // Enable computed object literal property names
    'objectLiteralComputedProperties': true,
    // Enable duplicate object literal properties in strict mode
    'objectLiteralDuplicateProperties': true,
    // Enable object literal shorthand methods
    'objectLiteralShorthandMethods': true,
    // Enable object literal shorthand properties
    'objectLiteralShorthandProperties': true,
    // Enable octal literals
    'octalLiterals': true,
    // Enable the regular expression u flag
    'regexUFlag': true,
    // Enable the regular expression y flag
    'regexYFlag': true,
    // Enable the rest parameters
    'restParams': true,
    // Enable the spread operator
    'spread': true,
    // Enable super references inside of functions
    'superInFunctions': true,
    // Enable template strings
    'templateStrings': true,
    // Enable code point escapes
    'unicodeCodePointEscapes': true
  },
  rules: {
    // Require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // Require space before/after arrow function's arrow (fixable)
    'arrow-spacing': 2,
    // Verify super() callings in constructors (off by default)
    'constructor-super': 2,
    // Enforce the spacing around the * in generator functions (off by default)
    'generator-star-spacing': [2, 'after'],
    // Disallow modifying variables of class declarations
    'no-class-assign': 2,
    // Disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // Disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // Disallow to use this/super before super() calling in constructors. (off by default)
    'no-this-before-super': 2,
    // Require let or const instead of var (off by default)
    'no-var': 2,
    // Require method and property shorthand syntax for object literals (off by default)
    'object-shorthand': [2, 'always'],
    // Require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 0,
    // Suggest using const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // Suggest using the spread operator instead of .apply().
    'prefer-spread': 2,
    // Suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // Suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // Disallow generator functions that do not have yield
    'require-yield': 2
  }
};
