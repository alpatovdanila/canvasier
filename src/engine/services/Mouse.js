import { PubSub } from '../lib/PubSub'
import { Actors } from './Actors'

const createPayload = (originalEvent) => {
  return {
    x: originalEvent.offsetX,
    y: originalEvent.offsetY,
    button: originalEvent.button,
    originalEvent
  }
}

class MouseService extends PubSub {
  constructor() {
    super()
    this.x = 0
    this.y = 0
  }

  init(canvasElement) {
    canvasElement.addEventListener('mousemove', (event) => {
      this.x = event.offsetX
      this.y = event.offsetY
    })

    canvasElement.addEventListener('mousedown', (event) => {
      const payload = createPayload(event)

      const target = this.findEventTarget(payload.x, payload.y)
      if (target) {
        target.dispatchEvent('mousedown', payload)
        target.dispatchEvent('click', payload)
      }

      this.dispatchEvent('mousedown', payload)
      this.dispatchEvent('click', payload)
    })

    canvasElement.addEventListener('mouseup', (event) => {
      const payload = createPayload(event)

      const target = this.findEventTarget(payload.x, payload.y)
      if (target) {
        target.dispatchEvent('mouseup', payload)
      }

      this.dispatchEvent('mouseup', payload)
    })
  }

  findEventTarget(x, y) {
    return Actors.findReverse((actor) => actor.$$boundingBox?.checkPoint(x, y))
  }
}

export const Mouse = new MouseService()
