import { TSESLint } from '@typescript-eslint/experimental-utils';
import directiveFilenameSuffix from '../../src/rules/directive-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('directiveFilenameSuffix', directiveFilenameSuffix, {
  valid: [
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.component.html',
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
    },
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.component.html',
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['component', 'page'] }],
    },
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.page.html',
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.page.ts',
      options: [{ suffixes: ['component', 'page'] }],
    },
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.page.html',
    })
    class TestPage {}
  `,
      filename: '/src/app/test.page.ts',
      options: [{ suffixes: ['page'] }],
    },
    {
      code: `
    @Directive({
      selector: '[myHighlight]'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
      options: [{ suffixes: ['page'] }],
    },
  ],
  invalid: [
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.component.html',
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.components.ts',
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.view.html',
    })
    class TestView {}
  `,
      filename: '/src/app/test.view.ts',
      options: [{ suffixes: ['component', 'page'] }],
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
    {
      code: `
        @Component({
      selector: 'sg-foo-bar',
      templateUrl: './test.component.html',
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['view', 'page'] }],
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
  ],
});
