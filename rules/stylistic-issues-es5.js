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
    // Enforce consistent spacing inside single-line blocks
    'block-spacing': [2, 'always'],
    // Enforce one true brace style (off by default)
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    // Require camel case names
    camelcase: [2, {properties: 'never'}],
    // Disallow or enforce trailing commas
    'comma-dangle': 2,
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
    // Disallow spacing between function identifiers and their invocations
    'func-call-spacing': [2, 'never'],
    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 2,
    // Don't require function expressions to have a name (off by default)
    'func-names': 0,
    // Enforces use of function declarations or expressions (off by default)
    'func-style': [2, 'declaration'],
    // Allow all identifiers
    'id-blacklist': 0,
    // Don't enforce minimum and maximum identifier lengths
    'id-length': 0,
    // Don't require identifiers to match a specified regular expression
    'id-match': 0,
    // This option sets a specific tab width for your code (off by default)
    indent: [2, 2],
    // Enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [2, {before: true, after: true}],
    // Don't enforce position of line comments
    'line-comment-position': 0,
    // Disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    'linebreak-style': 0,
    // Enforces empty lines around comments (off by default)
    'lines-around-comment': [2, {beforeBlockComment: true}],
    // Require newlines around directives
    'lines-around-directive': [2, 'always'],
    // Enforce a maximum depth that blocks can be nested
    'max-depth': [2, 4],
    // Enforce a maximum line length
    'max-len': [2, 120],
    // Don't enforce enforce a maximum number of lines per file
    'max-lines': 0,
    // Specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [2, 3],
    // enforce a maximum number of parameters in function definitions
    'max-params': [2, 10],
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [2, {max: 2}],
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': [2, 15],
    // Don't enforce newlines between operands of ternary expressions
    'multiline-ternary': 0,
    // Require a capital letter for constructors
    'new-cap': [2, {newIsCap: true}],
    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // Allow/disallow an empty newline after var statement (off by default)
    'newline-after-var': 0,
    // Don't require an empty line before return statements
    'newline-before-return': 0,
    // Don't require a newline after each call in a method chain
    'newline-per-chained-call': 0,
    // Disallow use of the Array constructor
    'no-array-constructor': 2,
    // Disallow use of bitwise operators
    'no-bitwise': 2,
    // Disallow use of the continue statement (off by default)
    'no-continue': 2,
    // Allow comments inline after code
    'no-inline-comments': 0,
    // Disallow if as the only statement in an else block (off by default)
    'no-lonely-if': 2,
    // Allow mixed binary operators
    'no-mixed-operators': 0,
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // Disallow multiple empty lines (off by default)
    'no-multiple-empty-lines': 2,
    // Disallow negated conditions
    'no-negated-condition': 2,
    // Disallow nested ternary expressions (off by default)
    'no-nested-ternary': 2,
    // Disallow use of the Object constructor
    'no-new-object': 2,
    // Disallow the unary operators ++ and --
    'no-plusplus': 2,
    // Disallow specified syntax
    'no-restricted-syntax': [2, 'WithStatement'],
    // Disallow all tabs
    'no-tabs': 2,
    // Disallow the use of ternary operators (off by default)
    'no-ternary': 0,
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // Disallow the use of Boolean literals in conditional expressions (off by default)
    'no-unneeded-ternary': 2,
    // Disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // Don't enforce consistent line breaks inside braces
    'object-curly-newline': 0,
    // Require or disallow padding inside curly braces (off by default)
    'object-curly-spacing': [2, 'never'],
    // Enforce placing object properties on separate lines
    'object-property-newline': [2, {allowMultiplePropertiesPerLine: true}],
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
    // Don't require JSDoc comments
    'require-jsdoc': 0,
    // Enforce spacing before and after semicolons
    'semi-spacing': [2, {before: false, after: true}],
    // Require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],
    // Don't sort variables within the same declaration block
    'sort-vars': 0,
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
    // Disallow Unicode byte order mark (BOM)
    'unicode-bom': [2, 'never'],
    // Require regex literals to be wrapped in parentheses (off by default)
    'wrap-regex': 0
  }
};
