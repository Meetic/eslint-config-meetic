# eslint-config-meetic

[![NPM version](http://img.shields.io/npm/v/eslint-config-meetic.svg)](https://www.npmjs.org/package/eslint-config-meetic)
[![Build Status](https://travis-ci.org/Meetic/eslint-config-meetic.svg?branch=master)](https://travis-ci.org/Meetic/eslint-config-meetic)
[![Code Climate](https://codeclimate.com/github/Meetic/eslint-config-meetic/badges/gpa.svg)](https://codeclimate.com/github/Meetic/eslint-config-meetic)

A set of configurable ESLint configurations used in [Meetic](https://github.com/Meetic) projects.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-meetic
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's shareable configs feature. For more details about how shareable configs work, see the [ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package includes the following full configurations:

- `meetic` - The default ES6 config
- `meetic/configurations/es5` - The default ES5 config
- `meetic/configurations/es6` - The default ES6 config

The default configuration assumes ECMAScript-6. To extend a config in ESLint just add the extends attribute to your `.eslintrc`:

```json
{
  "extends": "meetic"
}
```

If your project is written in ECMAScript-5, you can extend with the ES5 subset of configuration:

```json
{
  "extends": "meetic/configurations/es5"
}
```

This ruleset enforces neither `env` nor `globals` settings. They are meant to be set individually on every project.

## License

[MIT License](http://opensource.org/licenses/MIT)
