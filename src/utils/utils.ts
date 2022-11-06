export const STYLE_GUIDE_LINK =
  'https://angular.io/guide/styleguide#style-02-03';

export const COMPONENT_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Component"]';

export const DIRECTIVE_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Directive"]';

export const PIPE_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Pipe"]';

export const MODULE_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="NgModule"]';

export const INJECTABLE_CLASS_DECORATOR =
  'ClassDeclaration > Decorator[expression.callee.name="Injectable"]';

/**
 * get filename suffix
 *
 * @export
 * @param {string} filename
 * @returns {(RegExpMatchArray | null)}
 */
export function getFilenameSuffix(filepath: string): RegExpMatchArray | null {
  const filename = filepath.replace(/^.*[\\\/]/, '');
  const suffixAndExtension = filename.substring(filename.indexOf('.') + 1);
  return suffixAndExtension.match(/(.+)\.ts$/);
}

export function isTestFile(filenameSuffix: RegExpMatchArray | null): boolean {
  return !!(filenameSuffix && filenameSuffix.length > 1 && filenameSuffix[1].includes('.spec'));
}