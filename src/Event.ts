import { noop } from './util/index.js'
import Node from './Node'

export default class Event {
    public cancelBubble: boolean
    public cancelable: boolean
    public target: Node | any
    public currentTarget: string
    public preventDefault: () => void
    public stopPropagation: () => void
    public type: string
    public timeStamp: number

    constructor(type: string) {

        this.cancelBubble = false
        this.cancelable = false
        this.target = null
        this.currentTarget = null
        this.preventDefault = noop
        this.stopPropagation = noop
        this.type = type
        this.timeStamp = Date.now()
    }
}
