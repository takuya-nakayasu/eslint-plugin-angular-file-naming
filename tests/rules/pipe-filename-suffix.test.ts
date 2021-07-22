import { TSESLint } from '@typescript-eslint/experimental-utils';
import pipeFilenameSuffix from '../../src/rules/pipe-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('pipeFilenameSuffix', pipeFilenameSuffix, {
  valid: [
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.pipe.ts',
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['pipe', 'validator'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestValidator {}
  `,
      filename: '/src/app/test.validator.ts',
      options: [{ suffixes: ['pipe', 'validator'] }],
    },
    {
      code: `
    @Pipe({
      name: 'sgPipe'
    })
    class TestPipe {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['pipe'] }],
    },
    {
      code: `
    @Component({
      selector: 'sg-bar-foo'
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['pipe'] }],
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
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
    {
      code: `
        @Directive({
          selector: 'sg-foo-bar'
        })
        class TestDirectivePage implements AsyncValidator {}
  `,
      filename: '/src/app/test.page.ts',
      options: [{ suffixes: ['pipe', 'validator'] }],
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
    {
      code: `
        @Directive({
          selector: 'sgBarFoo'
        })
        class TestPageDirective {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['page'] }],
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
  ],
});
