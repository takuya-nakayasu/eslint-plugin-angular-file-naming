import { TSESLint } from '@typescript-eslint/experimental-utils';
import moduleFilenameSuffix from '../../src/rules/module-filename-suffix';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('moduleFilenameSuffix', moduleFilenameSuffix, {
  valid: [
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/app.module.ts',
    },
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/app.module.ts',
      options: [{ suffixes: ['module', 'mod'] }],
    },
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/test.mod.ts',
      options: [{ suffixes: ['module', 'mod'] }],
    },
    {
      code: `
    @Directive({
      selector: 'sgBarFoo'
    })
    class TestDirective {}
  `,
      filename: '/src/app/test.directive.ts',
      options: [{ suffixes: ['module'] }],
    },
    {
      code: `
    @Component({
      selector: 'sg-bar-foo'
    })
    class TestComponent {}
  `,
      filename: '/src/app/test.component.ts',
      options: [{ suffixes: ['module'] }],
    },
  ],
  invalid: [
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/app.ts',
      errors: [{ messageId: 'moduleFilenameSuffix' }],
    },
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/app.m.ts',
      options: [{ suffixes: ['module', 'mod'] }],
      errors: [{ messageId: 'moduleFilenameSuffix' }],
    },
    {
      code: `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  `,
      filename: '/src/app/app.module.ts',
      options: [{ suffixes: ['modules'] }],
      errors: [{ messageId: 'moduleFilenameSuffix' }],
    },
  ],
});
