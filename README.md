# eslint-plugin-angular-file-naming

[![npm version](https://img.shields.io/npm/v/eslint-plugin-angular-file-naming.svg)](https://www.npmjs.com/package/eslint-plugin-angular-file-naming)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/follow/l08084?style=social)](https://twitter.com/l08084)

An ESLint plugin that enforce the filename to have a appropriate suffix (such as `.component.ts`, `.directive.ts`, `.module.ts`, `.pipe.ts`, or `.service.ts`).

**Please note**: This plugin will only lint the filenames of the `.ts` files you are linting with eslint. It will ignore other files that are not linted with eslint.

| File type | Appropriate suffix of the filename |
| --------- | ---------------------------------- |
| Component | `.component.ts`                    |
| Directive | `.directive.ts`                    |
| Module    | `.module.ts`                       |
| Pipe      | `.pipe.ts`                         |
| Service   | `.service.ts`                      |

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
    "angular-file-naming/component-filename-suffix": "error",
    "angular-file-naming/directive-filename-suffix": "error",
    "angular-file-naming/module-filename-suffix": "error",
    "angular-file-naming/pipe-filename-suffix": "error",
    "angular-file-naming/service-filename-suffix": "error",
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

```js
// .eslintrc.json
module.exports = {
  "plugins": [
    ...,
    "angular-file-naming"
  ],
  "rules": [
    ...,
    "angular-file-naming/component-filename-suffix": [
      "error",
      {
        "suffixes": ["component", "page", "view"]
      }
    ],
    "angular-file-naming/directive-filename-suffix": "error",
    "angular-file-naming/module-filename-suffix": "error",
    "angular-file-naming/pipe-filename-suffix": "error",
    "angular-file-naming/service-filename-suffix": [
      "error",
      {
        "suffixes": ["service", "guard", "store"]
      }
    ],
  ]
  ...,
}
```

Examples of **incorrect** file name with the above configuration:

```
app.comp.ts
sample.ts
test.filter.ts
```

Example of **correct** file name with the above configuration:

```
app.component.ts
app.page.ts
app.view.ts
test.directive.ts
app.module.ts
sample.pipe.ts
test.service.ts
test.guard.ts
test.store.ts
```

## License

MIT
