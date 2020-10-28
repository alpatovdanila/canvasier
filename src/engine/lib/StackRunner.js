import { Stack } from './Stack'
import { PubSub } from './PubSub'

export class StackRunner extends PubSub {
  constructor(stackInstance) {
    super()
    if (!(stackInstance instanceof Stack))
      throw new Error('Intance of Stack required')
    this._stack = stackInstance
    this._tasks = []
  }

  get stack() {
    return this._stack
  }

  addTask(taskFn) {
    this._tasks.push(taskFn)
  }

  run() {
    this.dispatchEvent('beforerun')
    this.stack.forEach((item) => this._tasks.forEach((task) => task(item)))
    this.dispatchEvent('afterrun')
  }
}
