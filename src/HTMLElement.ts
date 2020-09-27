import { noop } from './util/index.js'
import * as mixin from './util/mixin'
import Element from './Element'
import Node from './Node'

export default class HTMLElement extends Element {
    public focus: () => void
    public blur: () => void
    public insertBefore: () => void
    // @ts-ignore
    public removeChild: (node: Node) => void
    public remove: () => void
    public innerHTML: string
    public tagName: string

    constructor(tagName = '', level?: number) {
        super()

        this.className = ''
        this.children = []

        this.focus = noop
        this.blur = noop

        this.insertBefore = noop
        this.appendChild = noop
        this.removeChild = noop
        this.remove = noop

        this.innerHTML = ''

        this.tagName = tagName.toUpperCase()

        mixin.parentNode(this, level);
        mixin.style(this);
        mixin.classList(this);
        mixin.clientRegion(this);
        mixin.offsetRegion(this);
        mixin.scrollRegion(this);
    }
}
