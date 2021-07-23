# Enforces the file name of services to have a specified suffix (`service-filename-suffix`)

This rule enforces that file name of classes decorated with @Injectable must have suffix "service" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
test.pip.ts
test.filter.ts
```

Example of **correct** file name for this rule:

```
test.service.ts
```

## Options

By default, the suffix will be `service`. You may pass an array of suffixes, for example:

```json
{
  "angular-file-naming/service-filename-suffix": [
    "error",
    {
      "suffixes": ["service", "filter"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
test.pip.ts
test.p.ts
```

Example of **correct** file name with the above options:

```
test.service.ts
test.filter.ts
```
