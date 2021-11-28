/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
/**
 * @name cueRegion
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::cue-region with object of css properties
 *
 * @description
 * Returns an object with the ::cue-region pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::cue-region property as object with object of css properties
 */

export default function cueRegion(arrayOfProps) {
    return {
        '&::cue-region': arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj);
        }, {})
    };
}
