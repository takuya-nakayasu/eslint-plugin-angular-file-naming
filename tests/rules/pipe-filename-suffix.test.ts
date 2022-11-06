import { TSESLint } from '@typescript-eslint/experimental-utils';
import pipeFilenameSuffix from '../../src/rules/pipe-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('pipeFilenameSuffix', pipeFilenameSuffix, {
  valid: [
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pipe.ts',
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['pipe', 'pip'] }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pip.ts',
      options: [{ suffixes: ['pipe', 'pip'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
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
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pipe.spec.ts',
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: 'C:\\foo\\bar\\baz\\test.pipe.ts',
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: 'C:\\foo\\bar\\baz\\test.pipes.ts',
      options: [{ suffixes: ['pipes'] }],
    },
  ],
  invalid: [
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.ts',
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.p.ts',
      options: [{ suffixes: ['pipe', 'pip'] }],
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pipe.ts',
      options: [{ suffixes: ['filter'] }],
      errors: [{ messageId: 'pipeFilenameSuffix' }],
    },
  ],
});
