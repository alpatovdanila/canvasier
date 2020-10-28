import { Engine, Actors, Mouse } from '../engine/services'
import { Actor, DrawTasks, Regions } from '../engine/base'

class Ball extends Actor {
  init({ w, h, color = 'black ' }) {
    this.w = w
    this.h = h
    this.color = this.initialColor = color

    this.on('mousedown', () => {
      this.color = 'green'
    })

    this.on('mouseup', () => {
      this.color = this.initialColor
    })
  }

  step() {
    this.x = Mouse.x
    this.y = Mouse.y
  }

  createBoundingBox() {
    return new Regions.Rectangle(this.x, this.y, this.w, this.h)
  }

  draw() {
    const { x, y, w, h, color } = this
    return DrawTasks.fillRect({ x, y, h, w, color })
  }
}

Engine.init({
  render: {
    width: 400,
    height: 400,
    targetFps: 60,
    targetContainer: document.body
  }
})

Actors.push(new Ball(100, 100, { w: 25, h: 25, color: 'red' }))
