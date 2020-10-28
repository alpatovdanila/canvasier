export class PubSub {
  constructor() {
    this._listeners = {}
  }

  get listeners() {
    return this._listeners
  }

  on(eventName, handler) {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(handler)
  }

  off(eventName, handler) {
    if (this._listeners[eventName]) {
      this._listeners[eventName] = this._listeners[eventName].filter(
        (h) => h !== handler
      )
    }
  }

  dispatchEvent(eventName, payload) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((handler) => handler(payload))
    }
  }
}
