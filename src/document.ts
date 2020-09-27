import * as window from './window'
import Event from './Event'
import HTMLElement from './HTMLElement'
import HTMLVideoElement from './HTMLVideoElement'
import Image from './Image'
import Audio from './Audio'
import Canvas from './Canvas'
import DocumentElement from './DocumentElement'
import Body from './Body'
import './EventIniter/index.js'

const events = {}

const document = {
    readyState: 'complete',
    visibilityState: 'visible', // 'visible' , 'hidden'
    hidden: false,
    fullscreen: true,
    documentElement: new DocumentElement(),
    head: new HTMLElement('head'),
    body: new Body(),
    location: window.location,

    scripts: [],
    style: {},

    ontouchstart: null,
    ontouchmove: null,
    ontouchend: null,
    onvisibilitychange: null,

    parentNode: null,
    parentElement: null,

    createElement(tagName: string) {
        tagName = tagName.toLowerCase()
        if (tagName === 'canvas') {
            // @ts-ignore
            return new Canvas()
        } else if (tagName === 'audio') {
            // @ts-ignore
            return new Audio()
        } else if (tagName === 'img') {
            // @ts-ignore
            return new Image()
        } else if (tagName === 'video') {
            return new HTMLVideoElement()
        }

        return new HTMLElement(tagName)
    },

    createElementNS(nameSpace: string, tagName: string) {
        return this.createElement(tagName)
    },

    createTextNode(text: string) {
        // TODO: Do we need the TextNode Class ???
        return text
    },

    getElementById(id: string) {
        if (id === window.canvas.id) {
            return window.canvas
        }
        return null
    },

    getElementsByTagName(tagName) {
        tagName = tagName.toLowerCase()
        if (tagName === 'head') {
            return [document.head]
        } else if (tagName === 'body') {
            return [document.body]
        } else if (tagName === 'canvas') {
            return [window.canvas]
        }
        return []
    },

    getElementsByTagNameNS(nameSpace: string, tagName: string) {
        return this.getElementsByTagName(tagName)
    },

    getElementsByName(tagName: string) {
        if (tagName === 'head') {
            return [document.head]
        } else if (tagName === 'body') {
            return [document.body]
        } else if (tagName === 'canvas') {
            return [window.canvas]
        }
        return []
    },

    querySelector(query: string) {
        if (query === 'head') {
            return document.head
        } else if (query === 'body') {
            return document.body
        } else if (query === 'canvas') {
            return window.canvas
        } else if (query === `#${window.canvas.id}`) {
            return window.canvas
        }
        return null
    },

    querySelectorAll(query: string) {
        if (query === 'head') {
            return [document.head]
        } else if (query === 'body') {
            return [document.body]
        } else if (query === 'canvas') {
            return [window.canvas]
        }
        return []
    },

    addEventListener(type: string, listener: () => void) {
        if (!events[type]) {
            events[type] = []
        }
        events[type].push(listener)
    },

    removeEventListener(type: string, listener: () => void) {
        const listeners = events[type]

        if (listeners && listeners.length > 0) {
            for (let i = listeners.length; i--; i > 0) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1)
                    break
                }
            }
        }
    },

    dispatchEvent(event: {
        type: string,
        target: any,
    }) {
        const type = event.type;
        const listeners = events[type]

        if (listeners) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i](event)
            }
        }

        if (event.target && typeof event.target['on' + type] === 'function') {
            event.target['on' + type](event)
        }
    }
}


function onVisibilityChange(visible: boolean) {

    return function() {

        document.visibilityState = visible ? 'visible' : 'hidden'

        const hidden = !visible
        if (document.hidden === hidden) {
            return
        }
        document.hidden = hidden

        const event = new Event('visibilitychange')

        event.target = document
        event.timeStamp = Date.now()

        document.dispatchEvent(event)
    }
}

if (wx.onHide) {
    wx.onHide(onVisibilityChange(false))
}
if (wx.onShow) {
    wx.onShow(onVisibilityChange(true))
}

export default document
