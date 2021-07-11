import { TSESLint } from '@typescript-eslint/experimental-utils';

const STYLE_GUIDE_LINK = 'https://angular.io/styleguide#style-02-03';

const COMPONENT_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Component"]';

export const componentFilenameSuffix: TSESLint.RuleModule<
  'componentFilenameSuffix',
  []
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
    schema: [],
  },
  create: (context) => {
    return {
      [COMPONENT_CLASS_DECORATOR](node) {
        console.log(node);
      },
    };
  },
};

module.exports = componentFilenameSuffix;
export default componentFilenameSuffix;
