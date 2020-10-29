import { Render } from './Render'
import { Mouse } from './Mouse'
import { ActorsRunner } from './ActorsRunner'
import { Assets } from './Assets'

class EngineService {
  init(config) {
    const {
      render: { width, height, targetContainer, targetFps = 30 }
    } = config

    Assets.$$loadAll().then(() => {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d')
      targetContainer.appendChild(canvas)
      Render.init(context)
      Mouse.init(canvas)
      ActorsRunner.addTask(actor => actor.$$step())
      this._mainLoopStep(1000 / targetFps)
    })
  }

  _mainLoopStep(timeout) {
    ActorsRunner.run()
    setTimeout(() => this._mainLoopStep(timeout), timeout)
  }
}

export const Engine = new EngineService()
