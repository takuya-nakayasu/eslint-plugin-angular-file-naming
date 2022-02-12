import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import {
  DIRECTIVE_CLASS_DECORATOR,
  getFilenameSuffix,
  isTestFile,
  STYLE_GUIDE_LINK,
} from '../utils/utils';

type Options = { suffixes: string[] };

export const directiveFilenameSuffix: TSESLint.RuleModule<
  'directiveFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `The file name of Classes decorated with @Directive must have suffix "directive" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/takuya-nakayasu/eslint-plugin-angular-file-naming/blob/main/docs/rules/directive-filename-suffix.md',
    },
    messages: {
      directiveFilenameSuffix: `The file name of directive class should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
    },
    schema: [
      {
        type: 'object',
        properties: {
          suffixes: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: (context) => {
    return {
      [DIRECTIVE_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const filename = context.getFilename();
        const suffixes = context.options[0]?.suffixes || ['directive'];
        const filenameSuffix = getFilenameSuffix(filename);
        if (isTestFile(filenameSuffix)) {
          return;
        }
        if (
          !filenameSuffix ||
          !(filenameSuffix.length > 1) ||
          !suffixes.find((suffix) => suffix === filenameSuffix[1])
        ) {
          context.report({
            node,
            messageId: 'directiveFilenameSuffix',
            data: { suffixes },
          });
        }
      },
    };
  },
};

module.exports = directiveFilenameSuffix;
export default directiveFilenameSuffix;
