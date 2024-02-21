import type { Renderer } from './Renderer'
import type { _DrawContext } from './DrawContext'

import { noop, number2color } from './utils'

const PI180 = Math.PI / 180

interface ILoopList {
  // prev sub
  p: ILoopList
  // next sub
  n: ILoopList
  // callback
  f: (...a: any) => any
  // context
  // c: any
}

// const FILL_COLOR = '#fff'

export class Layer {
  draw: (ctx: _DrawContext) => void

  readonly renderer: Renderer
  readonly parent: Layer | null
  readonly children: Readonly<Layer[]>

  // readonly canvas: HTMLCanvasElement
  // readonly ctx: CanvasRenderingContext2D

  // CanvasTransform
  angle: number
  scale: { x: number; y: number }
  place: { x: number; y: number }

  pivot: { x: number; y: number }

  _ecolor1: string
  _ecolor2: string
  transform: DOMMatrix

  _rendering: boolean

  constructor(renderer: Layer['renderer'], draw: Layer['draw']) {
    this.renderer = renderer
    this.draw = draw

    this.parent = null
    this.children = []

    // this.canvas = document.createElement('canvas')
    // this.ctx = this.canvas.getContext('2d', { alpha: false })!

    // CanvasTransform
    this.angle = 0
    this.scale = { x: 1, y: 1 }
    this.place = { x: 0, y: 0 }

    this.pivot = { x: 0, y: 0 }

    this._ecount = 0
    this._events = {}
    this._ecolor1 = ''
    this._ecolor2 = ''

    this.transform = null as any

    this._rendering = false
  }

  layer(draw: Layer['draw']) {
    const layer = new Layer(this.renderer, draw)
    this.attach(layer)
    return layer
  }

  render() {
    const renderer = this.renderer
    const ctx = renderer.ctx
    const htx1 = renderer.htx1
    const htx2 = renderer.htx2
    const dtx = renderer.dtx

    let _htx1: CanvasRenderingContext2D | undefined
    let _htx2: CanvasRenderingContext2D | undefined

    ctx.save(), htx1.save(), htx2.save()

    dtx._a = []
    dtx._c = ctx
    dtx.layer = this
    dtx.angle = this.angle
    dtx.scale = this.scale
    dtx.place = this.place
    dtx.pivot = this.pivot

    this.draw(dtx)

    if (this.parent && !this.parent._rendering) {
      const t = this.parent.transform
      ctx.setTransform(t.a, t.b, t.c, t.d, t.e, t.f)
    }

    // CanvasTransform
    this.place = dtx.place
    ctx.translate(dtx.place.x, dtx.place.y)
    this.scale = dtx.scale
    ctx.scale(dtx.scale.x, dtx.scale.y)
    this.angle = dtx.angle
    ctx.rotate(dtx.angle * PI180)
    this.pivot = dtx.pivot
    ctx.translate(-dtx.pivot.x, -dtx.pivot.y)

    this.transform = ctx.getTransform()
    if (this._ecount) {
      const t = this.transform
      if (renderer._rendering) {
        this._ecolor1 = number2color(renderer._layers.length)
        this._ecolor2 = number2color(16e6 - renderer._layers.length)
        renderer._layers.push(this)
      }

      _htx1 = htx1
      _htx2 = htx2
      htx1.fillStyle = this._ecolor1
      htx1.strokeStyle = this._ecolor1
      htx1.setTransform(t.a, t.b, t.c, t.d, t.e, t.f)
      htx2.fillStyle = this._ecolor2
      htx2.strokeStyle = this._ecolor2
      htx2.setTransform(t.a, t.b, t.c, t.d, t.e, t.f)
    }

    ctx.save(), htx1.save(), htx2.save()
    for (let a = dtx._a, i = 0, l = a.length; i < l; i++) a[i][0](ctx, a[i][1], _htx1, _htx2)
    ctx.restore(), htx1.restore(), htx2.restore()

    this._rendering = true
    for (let a = this.children, i = 0; i < a.length; i++) a[i].render()
    this._rendering = false
    ctx.restore(), htx1.restore(), htx2.restore()
  }

  update() {
    this.renderer.update()
  }

  attach(shape: Layer, index?: number) {
    const children = this.children
    shape.detach()
    // @ts-ignore
    shape.parent = this
    if (index === (index! | 0) && index > -1 && index < children.length) {
      // @ts-ignore
      children.splice(index, 0, shape)
    } else {
      // @ts-ignore
      children.push(shape)
    }
    if (shape._events) {
      const renderer = this.renderer
      for (const type in this._events) renderer._event(type as any, true)
    }
    this.update()
  }

  detach() {
    if (this.parent) {
      const children = this.parent.children
      const index = children.lastIndexOf(this)
      // @ts-ignore
      index < 0 || children.splice(index, 1)
      // @ts-ignore
      this.parent = null
      if (this._events) {
        const renderer = this.renderer
        for (const type in this._events) renderer._event(type as any, false)
      }
      this.update()
    }
  }

  detachChildren() {
    for (let a = this.children, i = a.length; i-- > 0; ) a[i].detach()
  }

  _ecount: number
  _events: { [key: string]: ILoopList }
  event<Type extends keyof GlobalEventHandlersEventMap>(
    type: Type,
    callback: (this: Layer, e: GlobalEventHandlersEventMap[Type], rect: DOMRect) => boolean
  ) {
    // const _events = this._events || (this._events = {})
    let first = this._events[type]
    if (!first) {
      this._events[type] = first = { p: null, n: null } as unknown as ILoopList
      first.p = first.n = first
    }

    const sub = {
      p: null,
      n: null,
      f: callback
    } as unknown as ILoopList
    ;(sub.p = (sub.n = first).p).n = sub.n.p = sub

    this._ecount!++
    this.renderer._event(type, true)
    this.update()
    return () => {
      if (sub.p !== sub) {
        this._ecount!--
        this.renderer._event(type, false)
        ;(sub.p.n = sub.n), (sub.n.p = sub.p)
        ;(sub.f = noop), (sub.p = sub)
      }
    }
  }
}
