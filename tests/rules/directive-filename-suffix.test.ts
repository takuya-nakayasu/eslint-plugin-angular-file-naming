import { TSESLint } from '@typescript-eslint/experimental-utils';
import directiveFilenameSuffix from '../../src/rules/directive-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('directiveFilenameSuffix', directiveFilenameSuffix, {
  valid: [
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
      options: [{ suffixes: ['directive', 'validator'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestValidator {}
  `,
      filename: '/src/app/test.validator.ts',
      options: [{ suffixes: ['directive', 'validator'] }],
    },
    {
      code: `
    @Pipe({
      name: 'sgPipe'
    })
    class TestPipe {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['directive'] }],
    },
    {
      code: `
    @Component({
      selector: 'sg-bar-foo'
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['directive'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.spec.ts',
    },
    {
      code: `
      @Directive({
        selector: 'sgBarFoo'
      })
      class TestDirective {}
  `,
      filename: 'C:\\foo\\bar\\baz\\test.directive.ts',
    },
    {
      code: `
      @Directive({
        selector: 'sgBarFoo'
      })
      class TestDirective {}
  `,
      filename: 'C:\\foo\\bar\\baz\\test.directives.ts',
      options: [{ suffixes: ['directives'] }],
    },
  ],
  invalid: [
    {
      code: `
        @Directive({
          selector: 'sg-foo-bar'
        })
        class Test {}
  `,
      filename: '/src/app/test.ts',
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
    {
      code: `
        @Directive({
          selector: 'sg-foo-bar'
        })
        class TestDirectivePage implements AsyncValidator {}
  `,
      filename: '/src/app/test.page.ts',
      options: [{ suffixes: ['directive', 'validator'] }],
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
    {
      code: `
        @Directive({
          selector: 'sgBarFoo'
        })
        class TestPageDirective {}
  `,
      filename: '/src/app/test.directive.ts',
      options: [{ suffixes: ['page'] }],
      errors: [{ messageId: 'directiveFilenameSuffix' }],
    },
  ],
});
