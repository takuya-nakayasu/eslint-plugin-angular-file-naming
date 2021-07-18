export const COMPONENT_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Component"]';

export const DIRECTIVE_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Directive"]';

export const STYLE_GUIDE_LINK =
  'https://angular.io/guide/styleguide#style-02-03';

/**
 * get filename suffix
 *
 * @export
 * @param {string} filename
 * @returns {(RegExpMatchArray | null)}
 */
export function getFilenameSuffix(filename: string): RegExpMatchArray | null {
  return filename.match(/(?:\/|\\).+\.(.+)\.ts$/);
}
