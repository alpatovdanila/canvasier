import { Engine, Actors } from '../engine/services'
import { Ball } from './Ball'

Engine.init({
  render: {
    width: 400,
    height: 400,
    targetFps: 60,
    targetContainer: document.body
  }
})

Actors.push(new Ball(100, 100, { w: 25, h: 25, color: 'red' }))
