//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name required
 * @category CssProps Helper
 * @summary Returns css pseudo selector :required with object of css properties
 *
 * @description
 * Returns an object with the :required pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :required property as object with object of css properties
 */

export default function required(arrayOfProps) {
    return {
        "&:required": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}