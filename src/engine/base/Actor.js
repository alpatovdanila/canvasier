import { PubSub } from '../lib/PubSub'

export class Actor extends PubSub {
  constructor(x = 0, y = 0, props = {}) {
    super()
    this.x = x
    this.y = y
    this.init(props)
    this.$$boundingBox = this.createBoundingBox()
  }

  $$draw() {
    return this.draw()
  }

  $$step() {
    this.step()
    if (this.$$boundingBox) {
      this.$$boundingBox.x = this.x
      this.$$boundingBox.y = this.y
    }
  }

  createBoundingBox() {
    return null
  }

  init() {}

  step() {}

  draw() {}
}
