/**
 * @name px
 * @category Units Helper
 * @summary Returns length in pixels unit for a given length
 *
 * @description
 * Returns length in pixels unit for a given length.
 *
 * @param {number} length - the original length
 * @returns {UnitPixels} length in pixels
 *
 * @example
 * // A measurement of 5 pixels
 * const length = px(5)
 * //=> "5px"
 */

export default function px(length) {
    return `${length}px`
}