import { Layer } from './Layer'
import { _DrawContext } from './DrawContext'

import { noop, color2number } from './utils'

// console.log(color2number([255, 255, 255]), number2color(16e6))

import { scale } from 'math-safe'

const addEvent = (type: string, renderer: Renderer) => {
  let E = renderer.canvas
  const htx1 = renderer._htx1
  const htx2 = renderer._htx2
  const fn = (e: any) => {
    let xy: any
    if ('clientX' in e) xy = e
    else if ('touches' in e && e.touches.length) xy = e.touches[0]
    if (!xy) console.error('Bad Canvasity event: ' + type)
    else {
      // console.time('event')
      
      if (renderer._ucaf !== null) renderer.render()

      const rect = E.getBoundingClientRect()

      const x = (scale(xy.clientX - rect.left, 0, E.clientWidth, 0, E.width) | 0) - 1
      const y = (scale(xy.clientY - rect.top, 0, E.clientHeight, 0, E.height) | 0) - 1
      // const index = (x + y * (E.width | 0)) * 4

      const id1 = htx1.getImageData(x, y, 3, 3).data
      const id2 = htx2.getImageData(x, y, 3, 3).data

      // console.log(id1)

      let k1: number, k2: number
      for (let i = 0, l = id1.length; i < l; i += 4) {
        k1 = color2number(id1[i], id1[i + 1], id1[i + 2])
        k2 = 16e6 - color2number(id2[i], id2[i + 1], id2[i + 2])
        // console.log(i, k1, k2)
        if (k1 === k2) {
          let layer: Layer | null = renderer._layers[k1]
          if (layer) {
            let nonStop = true
            for (let fst: any; layer && nonStop; layer = layer.parent) {
              if ((fst = layer._events && layer._events[type]))
                for (let now = fst; (now = now.n) !== fst; )
                  if (now.f.call(layer, e, rect)) nonStop = false
            }
          }
          break
        }
      }

      // console.timeEnd('event')
    }
  }

  E.addEventListener(type, fn)
  return () => {
    E && (E.removeEventListener(type, fn), (E = null as any))
  }
}

// const stageDrawDefault: Layer['draw'] = (ctx) => {
//   ctx.clearRect(0, 0, ctx.WIDTH, ctx.HEIGHT)
// }

export class Renderer {
  readonly canvas: HTMLCanvasElement
  readonly _hidden1: HTMLCanvasElement
  readonly _hidden2: HTMLCanvasElement
  readonly ctx: CanvasRenderingContext2D
  readonly _htx1: CanvasRenderingContext2D
  readonly _htx2: CanvasRenderingContext2D

  readonly _dtx: _DrawContext
  readonly stage: Layer

  _ucaf: null | number
  private readonly _update: () => void

  _layers: Layer[]

  _rendering: boolean

  constructor(canvas?: HTMLCanvasElement) {
    this._dtx = new _DrawContext()
    this.stage = new Layer(noop)
    // @ts-ignore
    this.stage.renderer = this
    this.stage._ecount = 9 // (нужен чтобы стейдж всегда был первым в массиве)

    this._ucaf = null
    this._update = () => {
      ;(this._ucaf = null), this.render()
    }
    this._layers = []
    this._events = {}

    this._rendering = false

    this.canvas = canvas || (canvas = document.createElement('canvas'))
    this.ctx = canvas.getContext('2d')!

    this._htx1 = (this._hidden1 = document.createElement('canvas')).getContext('2d', { alpha: !1 })!
    this._htx2 = (this._hidden2 = document.createElement('canvas')).getContext('2d', { alpha: !1 })!

    this.resize(canvas.width, canvas.height)
  }

  layer(draw: Layer['draw']) {
    return this.stage.layer(draw)
  }

  resize(width: number, height: number) {
    const canvas = this.canvas
    const hidden1 = this._hidden1
    const hidden2 = this._hidden2
    ;(canvas.width = width), (canvas.height = height)
    ;(hidden1.width = width), (hidden1.height = height)
    ;(hidden2.width = width), (hidden2.height = height)
    this.update()
  }

  render() {
    const { width, height } = this.canvas
    // console.time('render')
    if (this._ucaf !== null) {
      cancelAnimationFrame(this._ucaf), (this._ucaf = null)
    }
    this._layers = []
    // @ts-ignore
    this._dtx.WIDTH = width
    // @ts-ignore
    this._dtx.HEIGHT = height

    // this.ctx.reset()
    // this.htx1.reset()
    // this.htx2.reset()
    this.ctx.clearRect(0, 0, width, height)
    this._htx1.clearRect(0, 0, width, height)
    this._htx2.clearRect(0, 0, width, height)

    this._rendering = true
    this.stage.render()
    this._rendering = false
    // console.timeEnd('render')
  }

  attach(shape: Layer, index?: number) {
    this.stage.attach(shape, index)
  }

  detachChildren() {
    this.stage.detachChildren()
  }

  update() {
    if (this._ucaf === null) {
      this._ucaf = requestAnimationFrame(this._update)
    }
  }

  _events: { [key: string]: { n: number; u: () => void } }
  _event(type: keyof GlobalEventHandlersEventMap, isAdd: boolean) {
    const _events = this._events
    let item = _events[type]
    if (isAdd) {
      if (!item) _events[type] = item = { n: 0, u: addEvent(type, this) }
      item.n++
    } else {
      if (item && --item.n < 1) item.u(), delete _events[type]
    }
  }
}
