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

const _attachLayerDeep = (renderer: Renderer, layer: Layer) => {
  // @ts-ignore
  layer.renderer = renderer
  for (const type in layer._events) renderer._event(type as any, true)
  for (let a = layer.children, i = a.length; i-- > 0; ) _attachLayerDeep(renderer, a[i])
}
const _detachLayerDeep = (renderer: Renderer, layer: Layer) => {
  // @ts-ignore
  layer.renderer = null
  for (const type in layer._events) renderer._event(type as any, true)
  for (let a = layer.children, i = a.length; i-- > 0; ) _detachLayerDeep(renderer, a[i])
}

export class Layer {
  draw: (ctx: _DrawContext) => void
  readonly renderer: Renderer | null

  readonly parent: Layer | null
  readonly children: Readonly<Layer[]>

  // readonly canvas: HTMLCanvasElement
  // readonly ctx: CanvasRenderingContext2D

  // CanvasTransform
  angle: number
  scale: { x: number; y: number }
  place: { x: number; y: number }

  pivot: { x: number; y: number }

  private _ecolor1: string
  private _ecolor2: string
  private _transform: DOMMatrix

  private _rendering: boolean

  readonly shared: { [key: string]: unknown }

  constructor(draw: Layer['draw']) {
    this.draw = draw
    this.renderer = null

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

    this._transform = null as any

    this._rendering = false

    this.shared = {}
  }

  layer(draw: Layer['draw']) {
    const layer = new Layer(draw)
    this.attach(layer)
    return layer
  }

  render() {
    const renderer = this.renderer
    if (renderer) {
      const ctx = renderer.ctx
      const htx1 = renderer._htx1
      const htx2 = renderer._htx2
      const dtx = renderer._dtx

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
        const t = this.parent._transform
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

      // 68 (Released 2018-07-24)
      // safari 11.3 (Released 2018-03-29)
      this._transform = ctx.getTransform()
      if (this._ecount) {
        const t = this._transform
        if (renderer._rendering) {
          this._ecolor1 = number2color(renderer._layers.length)
          this._ecolor2 = number2color(16e6 - renderer._layers.length)
          renderer._layers.push(this)
        }

        _htx1 = htx1
        _htx2 = htx2
        htx1.fillStyle = this._ecolor1
        htx1.strokeStyle = this._ecolor1

        // Accept matrix 68 (Released 2018-07-24)
        // Accept matrix safari 11.3 (Released 2018-03-29)
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
  }

  // update() {
  //   if (this.renderer) this.renderer.update()
  // }

  attach(shape: Layer, index?: number) {
    const renderer = this.renderer
    const children = this.children
    if (shape.parent !== this) {
      shape.detach()
      // @ts-ignore
      shape.parent = this
      if (index === +index! && index < children.length) {
        if ((index |= 0) < 0) index = 0
        // @ts-ignore
        children.splice(index, 0, shape)
      } else {
        // @ts-ignore
        children.push(shape)
      }

      if (renderer) renderer.update(), _attachLayerDeep(renderer, this)
    } else {
      const idx = children.lastIndexOf(shape)
      index =
        index === +index! && index < children.length
          ? (index |= 0)
            ? 0
            : index
          : children.length - (idx < 0 ? 0 : 1)

      if (idx !== index) {
        // @ts-ignore
        idx < 0 || children.splice(idx, 1)
        // @ts-ignore
        children.splice(index, 0, shape)

        if (renderer) renderer.update()
      }
    }
  }

  detach() {
    if (this.parent) {
      const renderer = this.renderer
      const parentChildren = this.parent.children
      const idx = parentChildren.lastIndexOf(this)
      // @ts-ignore
      idx < 0 || parentChildren.splice(idx, 1)
      // @ts-ignore
      this.parent = null

      if (renderer) renderer.update(), _detachLayerDeep(renderer, this)
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

    let sub = {
      p: null,
      n: null,
      f: callback
    } as unknown as ILoopList
    ;(sub.p = (sub.n = first).p).n = sub.n.p = sub

    this._ecount!++
    if (this.renderer) this.renderer._event(type, true), this.renderer.update()
    return () => {
      if (sub) {
        this._ecount!--
        if (this.renderer) this.renderer._event(type, false)
        ;(sub.p.n = sub.n), (sub.n.p = sub.p)
        ;(sub.f = noop), (sub = null as any)
      }
    }
  }
}
