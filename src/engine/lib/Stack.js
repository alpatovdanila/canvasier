export class Stack {
  constructor() {
    this._items = []
  }

  get items() {
    return this._items
  }

  push(item) {
    this.items.push(item)
  }

  remove(item) {
    this.items = this.items.filter((i) => i !== item)
  }

  forEach(fn) {
    this.items.forEach(fn)
  }

  find(fn) {
    return this.items.find(fn)
  }

  findReverse(fn) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i]
      if (fn(item)) return item
    }
    return null
  }
}
