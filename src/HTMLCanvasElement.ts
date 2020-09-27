import Canvas from './Canvas'

// @ts-ignore
GameGlobal.screencanvas = GameGlobal.screencanvas || new Canvas()

const canvas = GameGlobal.screencanvas

const canvasConstructor = canvas.constructor

export default canvasConstructor
