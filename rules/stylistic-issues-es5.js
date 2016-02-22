/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues-es5
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

'use strict';

module.exports = {
  rules: {
    // Enforce spacing inside array brackets (off by default)
    'array-bracket-spacing': [2, 'never'],
    // Enforce one true brace style (off by default)
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    // Require camel case names
    camelcase: [2, {properties: 'never'}],
    // Enforce spacing before and after comma
    'comma-spacing': [2, {before: false, after: true}],
    // Enforce one true comma style (off by default)
    'comma-style': [2, 'last'],
    // Require or disallow padding inside computed properties (off by default)
    'computed-property-spacing': [2, 'never'],
    // Enforces consistent naming when capturing the current execution context (off by default)
    'consistent-this': [2, 'self'],
    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // Don't require function expressions to have a name (off by default)
    'func-names': 0,
    // Enforces use of function declarations or expressions (off by default)
    'func-style': [2, 'declaration'],
    // This option sets a specific tab width for your code (off by default)
    indent: [2, 2],
    // Enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    // Enforces empty lines around comments (off by default)
    'lines-around-comment': [2, {beforeBlockComment: true}],
    // Disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    'linebreak-style': 0,
    // Specify the maximum depth callbacks can be nested (off by default)
    'max-nested-callbacks': [2, 3],
    // Require a capital letter for constructors
    'new-cap': [2, {newIsCap: true}],
    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // Allow/disallow an empty newline after var statement (off by default)
    'newline-after-var': 0,
    // Disallow use of the Array constructor
    'no-array-constructor': 2,
    // Disallow use of the continue statement (off by default)
    'no-continue': 2,
    // Disallow comments inline after code (off by default)
    'no-inline-comments': 0,
    // Disallow if as the only statement in an else block (off by default)
    'no-lonely-if': 2,
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // Disallow multiple empty lines (off by default)
    'no-multiple-empty-lines': 2,
    // Disallow nested ternary expressions (off by default)
    'no-nested-ternary': 2,
    // Disallow use of the Object constructor
    'no-new-object': 2,
    // Disallow space between function identifier and application
    'no-spaced-func': 2,
    // Disallow the use of ternary operators (off by default)
    'no-ternary': 0,
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // Disallow the use of Boolean literals in conditional expressions (off by default)
    'no-unneeded-ternary': 2,
    // Require or disallow padding inside curly braces (off by default)
    'object-curly-spacing': [2, 'never'],
    // Allow or disallow one variable declaration per function (off by default)
    'one-var': [2, 'never'],
    // Require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'operator-assignment': [2, 'always'],
    // Enforce operators to be placed before or after line breaks (off by default)
    'operator-linebreak': [2, 'after'],
    // Enforce padding within blocks (off by default)
    'padded-blocks': 0,
    // Require quotes around object literal property names (off by default)
    'quote-props': [2, 'as-needed'],
    // Specify whether backticks, double or single quotes should be used
    quotes: [2, 'single'],
    // Enforce spacing before and after semicolons
    'semi-spacing': [2, {before: false, after: true}],
    // Require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],
    // Sort variables within the same declaration block (off by default)
    'sort-vars': 0,
    // Require a space after certain keywords (off by default)
    'keyword-spacing': 2,
    // Require or disallow space before blocks (off by default)
    'space-before-blocks': [2, 'always'],
    // Require or disallow space before function opening parenthesis (off by default)
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    // Require or disallow spaces inside parentheses (off by default)
    'space-in-parens': [2, 'never'],
    // Require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'space-unary-ops': [2, {words: true, nonwords: false}],
    // Require or disallow a space immediately following the // or /* in a comment (off by default)
    'spaced-comment': [2, 'always'],
    // Require regex literals to be wrapped in parentheses (off by default)
    'wrap-regex': 0
  }
};
