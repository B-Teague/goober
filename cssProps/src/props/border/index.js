import appendArgs from '../appendArgs/index'

/**
 * @name border
 * @category CssProps Helper
 * @summary Returns css property border and value as an object
 *
 * @description
 * Returns an object with the css property display with its passed in value
 *
 * @param {DisplayConstant} displayConstant1 - The first display constant value
 * @param {DisplayConstant} length - the original length
 * @returns {UnitPixels} length in pixels
 *
 * @example
 * // A measurement of 5 pixels
 * const length = px(5)
 * //=> "5px"
 */

export default function border() {
    return {
        border: appendArgs(arguments, 3)
    }
}