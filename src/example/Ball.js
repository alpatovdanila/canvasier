import image from './image.png'
import sound from './abmient.wav'
import { Assets, Mouse } from '../engine/services'
import { Actor, DrawTasks, Regions } from '../engine/base'

Assets.register([image, sound])

export class Ball extends Actor {
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

    console.log(Assets)
  }

  step() {
    this.x = Mouse.x
    this.y = Mouse.y
  }

  createBoundingBox() {
    return new Regions.Rectangle(this.x, this.y, this.w, this.h)
  }

  draw() {
    const { x, y } = this
    return DrawTasks.image({ x, y, imageAsset: Assets.get(image) })
  }
}
