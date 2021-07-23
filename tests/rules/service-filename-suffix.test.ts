import { TSESLint } from '@typescript-eslint/experimental-utils';
import serviceFilenameSuffix from '../../src/rules/service-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('serviceFilenameSuffix', serviceFilenameSuffix, {
  valid: [
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.service.ts',
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.service.ts',
      options: [{ suffixes: ['service', 'pip'] }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.pip.ts',
      options: [{ suffixes: ['service', 'pip'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
      options: [{ suffixes: ['service'] }],
    },
    {
      code: `
    @Component({
      selector: 'sg-bar-foo'
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['service'] }],
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
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.p.ts',
      options: [{ suffixes: ['service', 'pip'] }],
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
    {
      code: `
        @Pipe({
          name: 'ngBarFoo'
        })
        class Test {}
  `,
      filename: '/src/app/test.service.ts',
      options: [{ suffixes: ['filter'] }],
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
  ],
});
