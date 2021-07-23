import componentFilenameSuffix from './rules/component-filename-suffix';
import directiveFilenameSuffix from './rules/directive-filename-suffix';
import moduleFilenameSuffix from './rules/module-filename-suffix';
import pipeFilenameSuffix from './rules/pipe-filename-suffix';
import serviceFilenameSuffix from './rules/service-filename-suffix';

export = {
  rules: {
    'component-filename-suffix': componentFilenameSuffix,
    'directive-filename-suffix': directiveFilenameSuffix,
    'module-filename-suffix': moduleFilenameSuffix,
    'pipe-filename-suffix': pipeFilenameSuffix,
    'service-filename-suffix': serviceFilenameSuffix,
  },
  configs: {
    all: {
      plugins: ['angular-file-naming'],
      rules: {
        'angular-file-naming/component-filename-suffix': 'error',
        'angular-file-naming/directive-filename-suffix': 'error',
        'angular-file-naming/module-filename-suffix': 'error',
        'angular-file-naming/pipe-filename-suffix': 'error',
        'angular-file-naming/service-filename-suffix': 'error',
      },
    },
    recommended: {
      plugins: ['angular-file-naming'],
      rules: {
        'angular-file-naming/component-filename-suffix': 'error',
        'angular-file-naming/directive-filename-suffix': 'error',
        'angular-file-naming/module-filename-suffix': 'error',
        'angular-file-naming/pipe-filename-suffix': 'error',
        'angular-file-naming/service-filename-suffix': 'error',
      },
    },
  },
};
