# Enforces the file name of modules to have a specified suffix (`module-filename-suffix`)

This rule enforces that file name of classes decorated with @NgModule must have suffix "module" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
test.mod.ts
```

Example of **correct** file name for this rule:

```
test.module.ts
```

## Options

By default, the suffix will be `module`. You may pass an array of suffixes, for example:

```json
{
  "angular-file-naming/module-filename-suffix": [
    "error",
    {
      "suffixes": ["module", "mod"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
test.m.ts
```

Example of **correct** file name with the above options:

```
test.module.ts
test.mod.ts
```
