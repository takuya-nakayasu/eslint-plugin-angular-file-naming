# Enforces the file name of services to have a specified suffix (`service-filename-suffix`)

This rule enforces that file name of classes decorated with @Injectable must have suffix "service" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
test.guard.ts
test.store.ts
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
      "suffixes": ["service", "guard", "store", "service.mock"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
test.action.ts
test.component.ts
test.mock.ts
```

Example of **correct** file name with the above options:

```
test.service.ts
test.guard.ts
test.store.ts
test.service.mock.ts
```
