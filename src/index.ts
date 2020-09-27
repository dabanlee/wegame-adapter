import * as _window from './window'

const global = GameGlobal
GameGlobal.global = GameGlobal.global || global
const { platform } = wx.getSystemInfoSync()

// 开发者工具无法重定义 window
if (typeof __devtoolssubcontext === 'undefined' && platform === 'devtools') {
    
    for (const key in _window) {
        const descriptor = Object.getOwnPropertyDescriptor(global, key)

        if (!descriptor || descriptor.configurable === true) {
            Object.defineProperty(window, key, {
                value: _window[key]
            })
        }
    }
    for (const key in _window.document) {
        const descriptor = Object.getOwnPropertyDescriptor(global.document, key)

        if (!descriptor || descriptor.configurable === true) {
            Object.defineProperty(global.document, key, {
                value: _window.document[key]
            })
        }
    }
    // @ts-ignore
    window.parent = window
    
} else {
    // 真机不存在window对象
    for (const key in _window) {
        global[key] = _window[key]
    }
    global.window = global
    global.top = global.parent = global
}
