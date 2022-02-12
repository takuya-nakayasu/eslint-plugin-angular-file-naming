import { TSESLint } from '@typescript-eslint/experimental-utils';
import serviceFilenameSuffix from '../../src/rules/service-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('serviceFilenameSuffix', serviceFilenameSuffix, {
  valid: [
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestService {}
  `,
      filename: '/src/app/test.service.ts',
    },
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestService {}
  `,
      filename: '/src/app/test.service.ts',
      options: [{ suffixes: ['service', 'guard'] }],
    },
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestGuard {}
  `,
      filename: '/src/app/test.guard.ts',
      options: [{ suffixes: ['service', 'guard'] }],
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
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestService {}
  `,
      filename: '/src/app/test.service.spec.ts',
    },
  ],
  invalid: [
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class Test {}
  `,
      filename: '/src/app/test.ts',
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestGuard {}
  `,
      filename: '/src/app/test.g.ts',
      options: [{ suffixes: ['service', 'guard'] }],
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
    {
      code: `
@Injectable({
  providedIn: 'root',
})
export class TestService {}
  `,
      filename: '/src/app/test.service.ts',
      options: [{ suffixes: ['guard'] }],
      errors: [{ messageId: 'serviceFilenameSuffix' }],
    },
  ],
});
