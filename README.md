# eslint-config-meetic

A set of configurable ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-meetic
```

## Usage

#### Full Configurations

This set of configs is meant to be extended on a per-project basis as necessary using ESLint's
shareable configs feature. For more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package includes the following full configurations:

- `meetic` - The default ES6 config
- `meetic/configurations/es5` - The default ES5 config
- `meetic/configurations/es6` - The default ES6 config

To extend a config in ESLint just add the extends attribute to your `.eslintrc` (the default configuration assumes ECMAScript-6):

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

## License

[MIT License](http://opensource.org/licenses/MIT)
