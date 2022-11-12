# Enforces the file name of directives to have a specified suffix (`directive-filename-suffix`)

This rule enforces that file name of classes decorated with @Directive must have suffix "directive" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
test.dire.ts
test.validator.ts
```

Example of **correct** file name for this rule:

```
test.directive.ts
```

## Options

By default, the suffix will be `directive`. You may pass an array of suffixes, for example:

```json
{
  "angular-file-naming/directive-filename-suffix": [
    "error",
    {
      "suffixes": ["directive", "validator", "directive.mock"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
test.direc.ts
test.dire.ts
test.mock.ts
```

Example of **correct** file name with the above options:

```
test.directive.ts
test.validator.ts
test.directive.mock.ts
```
