import * as mixin from './util/mixin'

export default function Canvas() {
    const canvas = wx.createCanvas()

    if (!('tagName' in canvas)) {
        canvas.tagName = 'CANVAS'
    }

    canvas.type = 'canvas'

    mixin.parentNode(canvas)
    mixin.style(canvas)
    mixin.classList(canvas)
    mixin.clientRegion(canvas)
    mixin.offsetRegion(canvas)

    canvas.focus = function() {}
    canvas.blur = function() {}

    canvas.addEventListener = function(type: string, listener, options = {}) {
        document.addEventListener(type, listener, options)
    }

    canvas.removeEventListener = function(type: string, listener) {
        document.removeEventListener(type, listener)
    }

    canvas.dispatchEvent = function(event: {
        type: string,
    }) {}

    return canvas
}
