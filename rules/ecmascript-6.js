/**
 * These rules are only relevant to ES6 environments and are off by default.
 * @module rules/ecmascript-6
 * @see http://eslint.org/docs/rules/#ecmascript-6
 * @see http://eslint.org/docs/user-guide/configuring
 */

'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      // Enable arrow functions
      arrowFunctions: true,
      // Enable binary literals
      binaryLiterals: true,
      // Enable let and const (aka block bindings)
      blockBindings: true,
      // Enable classes
      classes: true,
      // Enable default function parameters
      defaultParams: true,
      // Enable destructuring
      destructuring: true,
      // Enable for-of loops
      forOf: true,
      // Enable generators
      generators: true,
      // Enable modules and global strict mode
      modules: true,
      // Enable computed object literal property names
      objectLiteralComputedProperties: true,
      // Enable duplicate object literal properties in strict mode
      objectLiteralDuplicateProperties: true,
      // Enable object literal shorthand methods
      objectLiteralShorthandMethods: true,
      // Enable object literal shorthand properties
      objectLiteralShorthandProperties: true,
      // Enable octal literals
      octalLiterals: true,
      // Enable the regular expression u flag
      regexUFlag: true,
      // Enable the regular expression y flag
      regexYFlag: true,
      // Enable the rest parameters
      restParams: true,
      // Enable the spread operator
      spread: true,
      // Enable super references inside of functions
      superInFunctions: true,
      // Enable template strings
      templateStrings: true,
      // Enable code point escapes
      unicodeCodePointEscapes: true
    }
  },
  rules: {
    // Require braces around arrow function bodies
    'arrow-body-style': [2, 'as-needed'],
    // Require parentheses around arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // Require space before/after arrow function's arrow (fixable)
    'arrow-spacing': 2,
    // Verify super() callings in constructors (off by default)
    'constructor-super': 2,
    // Enforce the spacing around the * in generator functions (off by default)
    'generator-star-spacing': [2, 'after'],
    // Disallow modifying variables of class declarations
    'no-class-assign': 2,
    // Allow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 0,
    // Disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // Disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // Disallow duplicate module imports
    'no-duplicate-imports': 2,
    // Disallow new operators with the Symbol object
    'no-new-symbol': 2,
    // Allow all modules when loaded by import
    'no-restricted-imports': 0,
    // Disallow to use this/super before super() calling in constructors. (off by default)
    'no-this-before-super': 2,
    // Disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 2,
    // Disallow unnecessary constructors
    'no-useless-constructor': 2,
    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2,
    // Require let or const instead of var (off by default)
    'no-var': 2,
    // Require method and property shorthand syntax for object literals (off by default)
    'object-shorthand': [2, 'always'],
    // Don't require arrow functions as callbacks
    'prefer-arrow-callback': 0,
    // Suggest using const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2,
    // Suggest using the spread operator instead of .apply().
    'prefer-spread': 2,
    // Suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // Require generator functions to contain yield
    'require-yield': 2,
    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [2, 'never'],
    // Don't enforce sorted import declarations within modules
    'sort-imports': 0,
    // Require symbol descriptions
    'symbol-description': 2,
    // Disallow spacing around embedded expressions of template strings
    'template-curly-spacing': [2, 'never'],
    // Require spacing after the * in yield* expressions
    'yield-star-spacing': [2, 'after']
  }
};
