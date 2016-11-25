/**
 * The following rules point out areas where you might have made mistakes.
 * @module rules/possible-errors
 * @see http://eslint.org/docs/rules/#possible-errors
 */

'use strict';

module.exports = {
  rules: {
    // Disallow assignment in conditional expressions
    'no-cond-assign': 2,
    // Disallow use of console (off by default in the node environment)
    'no-console': 2,
    // Disallow use of constant expressions in conditions
    'no-constant-condition': 2,
    // Disallow control characters in regular expressions
    'no-control-regex': 2,
    // Disallow use of debugger
    'no-debugger': 2,
    // Disallow duplicate arguments in functions
    'no-dupe-args': 2,
    // Disallow duplicate keys when creating object literals
    'no-dupe-keys': 2,
    // Disallow a duplicate case label.
    'no-duplicate-case': 2,
    // Disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,
    // Disallow empty statements
    'no-empty': 2,
    // Disallow assigning to the exception in a catch block
    'no-ex-assign': 2,
    // Disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 0,
    // Disallow unnecessary parentheses (off by default)
    'no-extra-parens': 2,
    // Disallow unnecessary semicolons
    'no-extra-semi': 2,
    // Disallow overwriting functions written as function declarations
    'no-func-assign': 2,
    // Disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,
    // Disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 2,
    // Disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // Disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 2,
    // Disallow calling some Object.prototype methods directly on object instances
    'no-prototype-builtins': 2,
    // Disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,
    // Disallow sparse arrays
    'no-sparse-arrays': 2,
    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 2,
    // Disallow confusing multiline expressions
    'no-unexpected-multiline': 2,
    // Disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2,
    // Disallow control flow statements in finally blocks
    'no-unsafe-finally': 2,
    // Disallow negation of the left operand of an in expression
    'no-unsafe-negation': 2,
    // Disallow comparisons with the value NaN
    'use-isnan': 2,
    // Ensure JSDoc comments are valid (off by default)
    'valid-jsdoc': 2,
    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2
  }
};
