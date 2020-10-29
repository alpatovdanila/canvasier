import { ActorsRunner } from './ActorsRunner'

class RenderService {
  constructor() {
    this._context = null
  }

  get context() {
    return this._context
  }

  init(context) {
    this._context = context

    ActorsRunner.on('beforerun', () => {
      this._context.clearRect(
        0,
        0,
        this._context.canvas.width,
        this._context.canvas.height
      )
    })

    ActorsRunner.addTask(actor => {
      const tasks = actor.$$draw()
      if (tasks) {
        if (tasks.forEach) {
          tasks.forEach(task => task(this._context))
        } else {
          tasks(this._context)
        }
      }
    })
  }
}

export const Render = new RenderService()
