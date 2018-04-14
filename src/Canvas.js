// import HTMLCanvasElement from './HTMLCanvasElement'
import { innerWidth, innerHeight } from './WindowProperties'

let hasModifiedCanvasPrototype = false
let hasInit2DContextConstructor = false
let hasInitWebGLContextConstructor = false

export default function Canvas() {
  const canvas = wx.createCanvas()

  canvas.type = 'canvas'

  // canvas.tagName = 'CANVAS'
  // canvas.__proto__.__proto__.__proto__ = new HTMLCanvasElement()

  if (!('parentElement' in canvas)){
    canvas.parentElement = canvas
  }

  const _getContext = canvas.getContext

  canvas.getBoundingClientRect = () => {
    const ret = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
    return ret
  }

  canvas.style = {
    top: '0px',
    left: '0px',
    width: innerWidth + 'px',
    height: innerHeight + 'px',
  }

  canvas.focus = function(){};
  canvas.blur = function(){};

  canvas.addEventListener = function (type, listener, options = {}) {
    // console.log('canvas.addEventListener', type);
    document.addEventListener(type, listener, options);
  }

  canvas.removeEventListener = function (type, listener) {
    // console.log('canvas.removeEventListener', type);
    document.removeEventListener(type, listener);
  }

  canvas.dispatchEvent = function (event = {}) {
    console.log('canvas.dispatchEvent' , event.type, event);
    // nothing to do
  }

  Object.defineProperty(canvas, 'clientWidth', {
    enumerable: true,
    get: function get() {
      return innerWidth
    }
  })

  Object.defineProperty(canvas, 'clientHeight', {
    enumerable: true,
    get: function get() {
      return innerHeight
    }
  })

  return canvas
}
