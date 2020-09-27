/**
 * 对于ES6中Symbol的极简兼容
 * 方便模拟私有变量
 */

let idCounter = 0

export default function Symbol(key: string) {
    return `__${key}_${Math.floor(Math.random() * 1e9)}_${++idCounter}__`
}

Symbol.iterator = Symbol('Symbol.iterator')
