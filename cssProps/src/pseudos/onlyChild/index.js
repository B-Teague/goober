/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
import { flatten } from '../../util/index';
export default function onlyChild(cssProps) {
    return {
        '&:only-child': flatten(cssProps)
    };
}