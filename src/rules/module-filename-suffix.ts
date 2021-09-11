import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import {
  getFilenameSuffix,
  STYLE_GUIDE_LINK,
  MODULE_CLASS_DECORATOR,
} from '../utils/utils';

type Options = { suffixes: string[] };

export const moduleFilenameSuffix: TSESLint.RuleModule<
  'moduleFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `The file name of Classes decorated with @NgModule must have suffix "module" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/takuya-nakayasu/eslint-plugin-angular-file-naming/blob/main/docs/rules/module-filename-suffix.md',
    },
    messages: {
      moduleFilenameSuffix: `The file name of module class should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
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
      [MODULE_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const filename = context.getFilename();
        const suffixes = context.options[0]?.suffixes || ['module'];
        const filenameSuffix = getFilenameSuffix(filename);
        if (
          !filenameSuffix ||
          !(filenameSuffix.length > 1) ||
          !suffixes.find((suffix) => suffix === filenameSuffix[1])
        ) {
          context.report({
            node,
            messageId: 'moduleFilenameSuffix',
            data: { suffixes },
          });
        }
      },
    };
  },
};

module.exports = moduleFilenameSuffix;
export default moduleFilenameSuffix;
