import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import {
  PIPE_CLASS_DECORATOR,
  getFilenameSuffix,
  STYLE_GUIDE_LINK,
} from '../utils/utils';

type Options = { suffixes: string[] };

export const pipeFilenameSuffix: TSESLint.RuleModule<
  'pipeFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `The file name of Classes decorated with @Pipe must have suffix "pipe" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/l08084/eslint-plugin-angular-file-naming/blob/main/docs/rules/pipe-filename-suffix.md',
    },
    messages: {
      pipeFilenameSuffix: `The file name of pipe class should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
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
      [PIPE_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const filename = context.getFilename();
        const suffixes = context.options[0]?.suffixes || ['pipe'];
        const filenameSuffix = getFilenameSuffix(filename);
        if (
          !filenameSuffix ||
          !(filenameSuffix.length > 1) ||
          !suffixes.find((suffix) => suffix === filenameSuffix[1])
        ) {
          context.report({
            node,
            messageId: 'pipeFilenameSuffix',
            data: { suffixes },
          });
        }
      },
    };
  },
};

module.exports = pipeFilenameSuffix;
export default pipeFilenameSuffix;
