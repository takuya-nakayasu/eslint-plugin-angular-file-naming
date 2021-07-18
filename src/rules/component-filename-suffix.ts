import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';
import {
  COMPONENT_CLASS_DECORATOR,
  getFilenameSuffix,
  STYLE_GUIDE_LINK,
} from '../utils/utils';

type Options = { suffixes: string[] };

export const componentFilenameSuffix: TSESLint.RuleModule<
  'componentFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `The file name of Classes decorated with @Component must have suffix "component" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/l08084/eslint-plugin-ionic-tappable/blob/main/docs/rules/click-events-have-tappable.md',
    },
    messages: {
      componentFilenameSuffix: `The file name of component class should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
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
      [COMPONENT_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const filename = context.getFilename();
        const suffixes = context.options[0]?.suffixes || ['component'];
        const filenameSuffix = getFilenameSuffix(filename);
        if (
          !filenameSuffix ||
          !(filenameSuffix.length > 1) ||
          !suffixes.find((suffix) => suffix === filenameSuffix[1])
        ) {
          context.report({
            node,
            messageId: 'componentFilenameSuffix',
            data: { suffixes },
          });
        }
      },
    };
  },
};

module.exports = componentFilenameSuffix;
export default componentFilenameSuffix;
