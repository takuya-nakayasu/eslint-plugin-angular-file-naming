import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import {
  getFilenameSuffix,
  STYLE_GUIDE_LINK,
  INJECTABLE_CLASS_DECORATOR,
  isTestFile,
} from '../utils/utils';

type Options = { suffixes: string[] };

export const serviceFilenameSuffix: TSESLint.RuleModule<
  'serviceFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `The file name of Classes decorated with @Injectable must have suffix "service" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/takuya-nakayasu/eslint-plugin-angular-file-naming/blob/main/docs/rules/service-filename-suffix.md',
    },
    messages: {
      serviceFilenameSuffix: `The file name of service class should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
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
      [INJECTABLE_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const filename = context.getFilename();
        const suffixes = context.options[0]?.suffixes || ['service'];
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
            messageId: 'serviceFilenameSuffix',
            data: { suffixes },
          });
        }
      },
    };
  },
};

module.exports = serviceFilenameSuffix;
export default serviceFilenameSuffix;
