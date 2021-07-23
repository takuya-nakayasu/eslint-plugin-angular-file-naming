# eslint-plugin-angular-file-naming

An ESLint plugin that click must be accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-angular-file-naming.svg)](https://www.npmjs.com/package/eslint-plugin-angular-file-naming)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/follow/l08084?style=social)](https://twitter.com/l08084)

**Please note**: This plugin will only lint the filenames of the `.ts` files you are linting with eslint. It will ignore other files that are not linted with eslint.

## Installation

```
npm install --save-dev eslint-plugin-angular-file-naming
```

Or

```
yarn add --dev eslint-plugin-angular-file-naming
```

## Usage

Modify your `.eslintrc`

```js
// .eslintrc.json
module.exports = {
  "plugins": [
    ...,
    "angular-file-naming"
  ],
  "rules": [
    ...,
    "angular-file-naming/component-filename-suffix": "error"
  ]
  ...,
}
```

## Rules

| Rule ID                                                                | Description                                                     |
| ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| [component-filename-suffix](./docs/rules/component-filename-suffix.md) | Enforces the file name of components to have a specified suffix |
| [directive-filename-suffix](./docs/rules/directive-filename-suffix.md) | Enforces the file name of directives to have a specified suffix |
| [module-filename-suffix](./docs/rules/module-filename-suffix.md)       | Enforces the file name of modules to have a specified suffix    |
| [pipe-filename-suffix](./docs/rules/pipe-filename-suffix.md)           | Enforces the file name of pipes to have a specified suffix      |
| [service-filename-suffix](./docs/rules/service-filename-suffix.md)     | Enforces the file name of services to have a specified suffix   |

## Examples

Examples of **incorrect** code:

```html
<div (click)="doClick()">I am clickable!</div>
```

Examples of **correct** code:

```html
<div tappable (click)="doClick()">I am clickable!</div>

<button (click)="doClick()">I am clickable!</button>
```

## License

MIT
