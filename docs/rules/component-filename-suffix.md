# Enforces the file name of components to have a specified suffix (`component-filename-suffix`)

This rule enforces that file name of classes decorated with @Component must have suffix "component" (or custom) in their name.

## Rule Details

This rule follows the recommendation from the [Angular styleguide](https://angular.io/guide/styleguide#style-02-03).

Examples of **incorrect** file name for this rule (with default configuration):

```
app.page.ts
app.view.ts
app.comp.ts
```

Example of **correct** file name for this rule:

```
app.component.ts
```

## Options

By default, the suffix will be `component`. You may pass an array of suffixes, for example:

```json
{
  "angular-file-naming/component-filename-suffix": [
    "error",
    {
      "suffixes": ["component", "page", "view"]
    }
  ]
}
```

Examples of **incorrect** file name with the above options:

```
app.comp.ts
app.com.ts
```

Example of **correct** file name with the above options:

```
app.component.ts
app.page.ts
app.view.ts
```
