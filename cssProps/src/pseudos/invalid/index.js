/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
/**
 * @name invalid
 * @category CssProps Helper
 * @summary Returns css pseudo selector :invalid with object of css properties
 *
 * @description
 * Returns an object with the :invalid pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :invalid property as object with object of css properties
 */

export default function invalid(arrayOfProps) {
    return {
        '&:invalid': arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj);
        }, {})
    };
}
