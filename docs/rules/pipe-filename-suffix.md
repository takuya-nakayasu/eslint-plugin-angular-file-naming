# Enforces the file name of pipes to have a specified suffix (`pipe-filename-suffix`)

This rule enforces that file name of classes decorated with @Pipe must have suffix "pipe" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
test.dire.ts
test.validator.ts
```

Example of **correct** file name for this rule:

```
test.pipe.ts
```

## Options

By default, the suffix will be `pipe`. You may pass an array of suffixes, for example:

```json
{
  "angular-file-naming/pipe-filename-suffix": [
    "error",
    {
      "suffixes": ["pipe", "validator"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
test.direc.ts
test.dire.ts
```

Example of **correct** file name with the above options:

```
test.pipe.ts
test.validator.ts
```
