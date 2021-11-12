//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import * as cssFunctions from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssFunctions', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it('attr type', () => {
        expect(typeof cssFunctions.attr).toEqual('function');
    });

    it('attr', () => {
        expect(cssFunctions.attr(255, 255)).toEqual('attr(255, 255)');
    });


    it('blur type', () => {
        expect(typeof cssFunctions.blur).toEqual('function');
    });

    it('blur', () => {
        expect(cssFunctions.blur(255, 255)).toEqual('blur(255, 255)');
    });


    it('brightness type', () => {
        expect(typeof cssFunctions.brightness).toEqual('function');
    });

    it('brightness', () => {
        expect(cssFunctions.brightness(255, 255)).toEqual('brightness(255, 255)');
    });


    it('calc type', () => {
        expect(typeof cssFunctions.calc).toEqual('function');
    });

    it('calc', () => {
        expect(cssFunctions.calc(255, 255)).toEqual('calc(255, 255)');
    });


    it('circle type', () => {
        expect(typeof cssFunctions.circle).toEqual('function');
    });

    it('circle', () => {
        expect(cssFunctions.circle(255, 255)).toEqual('circle(255, 255)');
    });


    it('clamp type', () => {
        expect(typeof cssFunctions.clamp).toEqual('function');
    });

    it('clamp', () => {
        expect(cssFunctions.clamp(255, 255)).toEqual('clamp(255, 255)');
    });


    it('conic-gradient type', () => {
        expect(typeof cssFunctions.conic-gradient).toEqual('function');
    });

    it('conic-gradient', () => {
        expect(cssFunctions.conic-gradient(255, 255)).toEqual('conic-gradient(255, 255)');
    });


    it('contrast type', () => {
        expect(typeof cssFunctions.contrast).toEqual('function');
    });

    it('contrast', () => {
        expect(cssFunctions.contrast(255, 255)).toEqual('contrast(255, 255)');
    });


    it('counter type', () => {
        expect(typeof cssFunctions.counter).toEqual('function');
    });

    it('counter', () => {
        expect(cssFunctions.counter(255, 255)).toEqual('counter(255, 255)');
    });


    it('counters type', () => {
        expect(typeof cssFunctions.counters).toEqual('function');
    });

    it('counters', () => {
        expect(cssFunctions.counters(255, 255)).toEqual('counters(255, 255)');
    });


    it('cross-fade type', () => {
        expect(typeof cssFunctions.cross-fade).toEqual('function');
    });

    it('cross-fade', () => {
        expect(cssFunctions.cross-fade(255, 255)).toEqual('cross-fade(255, 255)');
    });


    it('drop-shadow type', () => {
        expect(typeof cssFunctions.drop-shadow).toEqual('function');
    });

    it('drop-shadow', () => {
        expect(cssFunctions.drop-shadow(255, 255)).toEqual('drop-shadow(255, 255)');
    });


    it('element type', () => {
        expect(typeof cssFunctions.element).toEqual('function');
    });

    it('element', () => {
        expect(cssFunctions.element(255, 255)).toEqual('element(255, 255)');
    });


    it('ellipse type', () => {
        expect(typeof cssFunctions.ellipse).toEqual('function');
    });

    it('ellipse', () => {
        expect(cssFunctions.ellipse(255, 255)).toEqual('ellipse(255, 255)');
    });


    it('env type', () => {
        expect(typeof cssFunctions.env).toEqual('function');
    });

    it('env', () => {
        expect(cssFunctions.env(255, 255)).toEqual('env(255, 255)');
    });


    it('fit-content type', () => {
        expect(typeof cssFunctions.fit-content).toEqual('function');
    });

    it('fit-content', () => {
        expect(cssFunctions.fit-content(255, 255)).toEqual('fit-content(255, 255)');
    });


    it('grayscale type', () => {
        expect(typeof cssFunctions.grayscale).toEqual('function');
    });

    it('grayscale', () => {
        expect(cssFunctions.grayscale(255, 255)).toEqual('grayscale(255, 255)');
    });


    it('hsl type', () => {
        expect(typeof cssFunctions.hsl).toEqual('function');
    });

    it('hsl', () => {
        expect(cssFunctions.hsl(255, 255)).toEqual('hsl(255, 255)');
    });


    it('hsla type', () => {
        expect(typeof cssFunctions.hsla).toEqual('function');
    });

    it('hsla', () => {
        expect(cssFunctions.hsla(255, 255)).toEqual('hsla(255, 255)');
    });


    it('hue-rotate type', () => {
        expect(typeof cssFunctions.hue-rotate).toEqual('function');
    });

    it('hue-rotate', () => {
        expect(cssFunctions.hue-rotate(255, 255)).toEqual('hue-rotate(255, 255)');
    });


    it('image type', () => {
        expect(typeof cssFunctions.image).toEqual('function');
    });

    it('image', () => {
        expect(cssFunctions.image(255, 255)).toEqual('image(255, 255)');
    });


    it('image-set type', () => {
        expect(typeof cssFunctions.image-set).toEqual('function');
    });

    it('image-set', () => {
        expect(cssFunctions.image-set(255, 255)).toEqual('image-set(255, 255)');
    });


    it('inset type', () => {
        expect(typeof cssFunctions.inset).toEqual('function');
    });

    it('inset', () => {
        expect(cssFunctions.inset(255, 255)).toEqual('inset(255, 255)');
    });


    it('invert type', () => {
        expect(typeof cssFunctions.invert).toEqual('function');
    });

    it('invert', () => {
        expect(cssFunctions.invert(255, 255)).toEqual('invert(255, 255)');
    });


    it('leader type', () => {
        expect(typeof cssFunctions.leader).toEqual('function');
    });

    it('leader', () => {
        expect(cssFunctions.leader(255, 255)).toEqual('leader(255, 255)');
    });


    it('linear-gradient type', () => {
        expect(typeof cssFunctions.linear-gradient).toEqual('function');
    });

    it('linear-gradient', () => {
        expect(cssFunctions.linear-gradient(255, 255)).toEqual('linear-gradient(255, 255)');
    });


    it('matrix type', () => {
        expect(typeof cssFunctions.matrix).toEqual('function');
    });

    it('matrix', () => {
        expect(cssFunctions.matrix(255, 255)).toEqual('matrix(255, 255)');
    });


    it('matrix3d type', () => {
        expect(typeof cssFunctions.matrix3d).toEqual('function');
    });

    it('matrix3d', () => {
        expect(cssFunctions.matrix3d(255, 255)).toEqual('matrix3d(255, 255)');
    });


    it('max type', () => {
        expect(typeof cssFunctions.max).toEqual('function');
    });

    it('max', () => {
        expect(cssFunctions.max(255, 255)).toEqual('max(255, 255)');
    });


    it('min type', () => {
        expect(typeof cssFunctions.min).toEqual('function');
    });

    it('min', () => {
        expect(cssFunctions.min(255, 255)).toEqual('min(255, 255)');
    });


    it('minmax type', () => {
        expect(typeof cssFunctions.minmax).toEqual('function');
    });

    it('minmax', () => {
        expect(cssFunctions.minmax(255, 255)).toEqual('minmax(255, 255)');
    });


    it('opacity type', () => {
        expect(typeof cssFunctions.opacity).toEqual('function');
    });

    it('opacity', () => {
        expect(cssFunctions.opacity(255, 255)).toEqual('opacity(255, 255)');
    });


    it('path type', () => {
        expect(typeof cssFunctions.path).toEqual('function');
    });

    it('path', () => {
        expect(cssFunctions.path(255, 255)).toEqual('path(255, 255)');
    });


    it('paint type', () => {
        expect(typeof cssFunctions.paint).toEqual('function');
    });

    it('paint', () => {
        expect(cssFunctions.paint(255, 255)).toEqual('paint(255, 255)');
    });


    it('perspective type', () => {
        expect(typeof cssFunctions.perspective).toEqual('function');
    });

    it('perspective', () => {
        expect(cssFunctions.perspective(255, 255)).toEqual('perspective(255, 255)');
    });


    it('polygon type', () => {
        expect(typeof cssFunctions.polygon).toEqual('function');
    });

    it('polygon', () => {
        expect(cssFunctions.polygon(255, 255)).toEqual('polygon(255, 255)');
    });


    it('radial-gradient type', () => {
        expect(typeof cssFunctions.radial-gradient).toEqual('function');
    });

    it('radial-gradient', () => {
        expect(cssFunctions.radial-gradient(255, 255)).toEqual('radial-gradient(255, 255)');
    });


    it('repeating-linear-gradient type', () => {
        expect(typeof cssFunctions.repeating-linear-gradient).toEqual('function');
    });

    it('repeating-linear-gradient', () => {
        expect(cssFunctions.repeating-linear-gradient(255, 255)).toEqual('repeating-linear-gradient(255, 255)');
    });


    it('repeating-radial-gradient type', () => {
        expect(typeof cssFunctions.repeating-radial-gradient).toEqual('function');
    });

    it('repeating-radial-gradient', () => {
        expect(cssFunctions.repeating-radial-gradient(255, 255)).toEqual('repeating-radial-gradient(255, 255)');
    });


    it('rgb type', () => {
        expect(typeof cssFunctions.rgb).toEqual('function');
    });

    it('rgb', () => {
        expect(cssFunctions.rgb(255, 255)).toEqual('rgb(255, 255)');
    });


    it('rgba type', () => {
        expect(typeof cssFunctions.rgba).toEqual('function');
    });

    it('rgba', () => {
        expect(cssFunctions.rgba(255, 255)).toEqual('rgba(255, 255)');
    });


    it('rotate type', () => {
        expect(typeof cssFunctions.rotate).toEqual('function');
    });

    it('rotate', () => {
        expect(cssFunctions.rotate(255, 255)).toEqual('rotate(255, 255)');
    });


    it('rotate3d type', () => {
        expect(typeof cssFunctions.rotate3d).toEqual('function');
    });

    it('rotate3d', () => {
        expect(cssFunctions.rotate3d(255, 255)).toEqual('rotate3d(255, 255)');
    });


    it('rotateX type', () => {
        expect(typeof cssFunctions.rotateX).toEqual('function');
    });

    it('rotateX', () => {
        expect(cssFunctions.rotateX(255, 255)).toEqual('rotateX(255, 255)');
    });


    it('rotateY type', () => {
        expect(typeof cssFunctions.rotateY).toEqual('function');
    });

    it('rotateY', () => {
        expect(cssFunctions.rotateY(255, 255)).toEqual('rotateY(255, 255)');
    });


    it('rotateZ type', () => {
        expect(typeof cssFunctions.rotateZ).toEqual('function');
    });

    it('rotateZ', () => {
        expect(cssFunctions.rotateZ(255, 255)).toEqual('rotateZ(255, 255)');
    });


    it('saturate type', () => {
        expect(typeof cssFunctions.saturate).toEqual('function');
    });

    it('saturate', () => {
        expect(cssFunctions.saturate(255, 255)).toEqual('saturate(255, 255)');
    });


    it('scale type', () => {
        expect(typeof cssFunctions.scale).toEqual('function');
    });

    it('scale', () => {
        expect(cssFunctions.scale(255, 255)).toEqual('scale(255, 255)');
    });


    it('scale3d type', () => {
        expect(typeof cssFunctions.scale3d).toEqual('function');
    });

    it('scale3d', () => {
        expect(cssFunctions.scale3d(255, 255)).toEqual('scale3d(255, 255)');
    });


    it('scaleX type', () => {
        expect(typeof cssFunctions.scaleX).toEqual('function');
    });

    it('scaleX', () => {
        expect(cssFunctions.scaleX(255, 255)).toEqual('scaleX(255, 255)');
    });


    it('scaleY type', () => {
        expect(typeof cssFunctions.scaleY).toEqual('function');
    });

    it('scaleY', () => {
        expect(cssFunctions.scaleY(255, 255)).toEqual('scaleY(255, 255)');
    });


    it('scaleZ type', () => {
        expect(typeof cssFunctions.scaleZ).toEqual('function');
    });

    it('scaleZ', () => {
        expect(cssFunctions.scaleZ(255, 255)).toEqual('scaleZ(255, 255)');
    });


    it('skew type', () => {
        expect(typeof cssFunctions.skew).toEqual('function');
    });

    it('skew', () => {
        expect(cssFunctions.skew(255, 255)).toEqual('skew(255, 255)');
    });


    it('skewX type', () => {
        expect(typeof cssFunctions.skewX).toEqual('function');
    });

    it('skewX', () => {
        expect(cssFunctions.skewX(255, 255)).toEqual('skewX(255, 255)');
    });


    it('skewY type', () => {
        expect(typeof cssFunctions.skewY).toEqual('function');
    });

    it('skewY', () => {
        expect(cssFunctions.skewY(255, 255)).toEqual('skewY(255, 255)');
    });


    it('sepia type', () => {
        expect(typeof cssFunctions.sepia).toEqual('function');
    });

    it('sepia', () => {
        expect(cssFunctions.sepia(255, 255)).toEqual('sepia(255, 255)');
    });


    it('target-counter type', () => {
        expect(typeof cssFunctions.target-counter).toEqual('function');
    });

    it('target-counter', () => {
        expect(cssFunctions.target-counter(255, 255)).toEqual('target-counter(255, 255)');
    });


    it('target-counters type', () => {
        expect(typeof cssFunctions.target-counters).toEqual('function');
    });

    it('target-counters', () => {
        expect(cssFunctions.target-counters(255, 255)).toEqual('target-counters(255, 255)');
    });


    it('target-text type', () => {
        expect(typeof cssFunctions.target-text).toEqual('function');
    });

    it('target-text', () => {
        expect(cssFunctions.target-text(255, 255)).toEqual('target-text(255, 255)');
    });


    it('translate type', () => {
        expect(typeof cssFunctions.translate).toEqual('function');
    });

    it('translate', () => {
        expect(cssFunctions.translate(255, 255)).toEqual('translate(255, 255)');
    });


    it('translate3d type', () => {
        expect(typeof cssFunctions.translate3d).toEqual('function');
    });

    it('translate3d', () => {
        expect(cssFunctions.translate3d(255, 255)).toEqual('translate3d(255, 255)');
    });


    it('translateX type', () => {
        expect(typeof cssFunctions.translateX).toEqual('function');
    });

    it('translateX', () => {
        expect(cssFunctions.translateX(255, 255)).toEqual('translateX(255, 255)');
    });


    it('translateY type', () => {
        expect(typeof cssFunctions.translateY).toEqual('function');
    });

    it('translateY', () => {
        expect(cssFunctions.translateY(255, 255)).toEqual('translateY(255, 255)');
    });


    it('translateZ type', () => {
        expect(typeof cssFunctions.translateZ).toEqual('function');
    });

    it('translateZ', () => {
        expect(cssFunctions.translateZ(255, 255)).toEqual('translateZ(255, 255)');
    });


    it('var type', () => {
        expect(typeof cssFunctions.var).toEqual('function');
    });

    it('var', () => {
        expect(cssFunctions.var(255, 255)).toEqual('var(255, 255)');
    });

});