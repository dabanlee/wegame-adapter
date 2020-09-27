import EventTarget from './EventTarget.js'

export default class Node extends EventTarget {
    public childNodes: Node[]
    constructor() {
        super()
        this.childNodes = []
    }

    appendChild(node: Node) {
        this.childNodes.push(node)
    }

    cloneNode() {
        const copyNode = Object.create(this)

        Object.assign(copyNode, this)
        return copyNode
    }

    removeChild(node: Node) {
        const index = this.childNodes.findIndex((child) => child === node)

        if (index > -1) {
            return this.childNodes.splice(index, 1)
        }
        return null
    }
}
