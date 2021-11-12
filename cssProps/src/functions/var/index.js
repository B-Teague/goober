//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name var
 * @category CssProps Helper
 * @summary Returns a function call for css function var() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function var()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function var()
 */
export default function var() {
    return "var(" + appendArgs(arguments, ",") + ")"
}