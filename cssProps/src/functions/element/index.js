/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */

/**
 * @name element
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function element()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function element()
 */
export default (...args) => `element(${args.join()})`;
