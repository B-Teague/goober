import appendArgs from '../appendArgs/index'

/**
 * @name display
 * @category CssProps Helper
 * @summary Returns css property display and value as an object
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

export const BLOCK = "block"
export const FLOW = "flow"
export const CONTENTS = "contents"
export const FLEX = "flex"
export const FLOW_ROOT = "flow-root"
export const GRID = "grid"
export const INHERIT = "inherit"
export const INITIAL = "initial"
export const INLINE = "inline"
export const INLINE_BLOCK = "inline-block"
export const INLINE_FLEX = "inline-flex"
export const INLINE_GRID = "inline-grid"
export const LIST_ITEM = "list-item"
export const NONE = "none"
export const REVERT = "revert"
export const TABLE = "table"
export const TABLE_ROW = "table-row"
export const UNSET = "unset"

export default function display() {
    return {
        display: appendArgs(arguments, 2)
    }
}