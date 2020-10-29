import { Engine, Actors } from '../engine/services'
import { Ball } from './Ball'
import { Wall } from './Wall'

Engine.init({
  render: {
    width: 400,
    height: 400,
    targetFps: 1,
    targetContainer: document.body
  }
})

Actors.push([
  new Ball(100, 100, { w: 25, h: 25, color: 'red' }),
  new Wall(200, 200, { w: 100, h: 10 })
])
