import Node from './Node'

export default class Element extends Node {
    public className: string
    public children: Node[]
    constructor() {
        super()

        this.className = ''
        this.children = []
    }

    setAttribute(name: string, value: string) {
        this[name] = value
    }

    getAttribute(name: string) {
        return this[name]
    }

    setAttributeNS(name: string, value: string) {
        this[name] = value
    }

    getAttributeNS(name: string) {
        return this[name]
    }
}
