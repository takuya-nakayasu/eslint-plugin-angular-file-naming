import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';

type Options = { suffixes: string[] };

const STYLE_GUIDE_LINK = 'https://angular.io/guide/styleguide#style-02-03';

const COMPONENT_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Component"]';

function getFilenameSuffix(filename: string): RegExpMatchArray | null {
  return filename.match(/(?:\/|\\).+\.(.+)\.ts$/);
}

export const componentFilenameSuffix: TSESLint.RuleModule<
  'componentFilenameSuffix',
  [Options]
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description: `Classes decorated with @Component must have suffix "Component" (or custom) in their name. See more at ${STYLE_GUIDE_LINK}`,
      recommended: 'error',
      url: 'https://github.com/l08084/eslint-plugin-ionic-tappable/blob/main/docs/rules/click-events-have-tappable.md',
    },
    messages: {
      componentFilenameSuffix: `Component class names should end with one of these suffixes: {{suffixes}} (${STYLE_GUIDE_LINK})`,
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
          !(filename.length > 1) ||
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
