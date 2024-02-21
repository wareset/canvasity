import type { Layer } from './Layer'

// const FILL_COLOR = '#fff'

const drawImage = (ctx: CanvasRenderingContext2D, args: any) => {
  ctx.drawImage.apply(ctx, args)
}

const beginPath = (
  ctx: CanvasRenderingContext2D,
  _: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.beginPath()
  if (htx2) {
    htx1!.beginPath()
    htx2!.beginPath()
  }
}
const clip = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.clip.apply(ctx, args)
  if (htx2) {
    htx1!.clip.apply(htx1, args)
    htx2!.clip.apply(htx2, args)
  }
}
const fill = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.fill.apply(ctx, args)
  if (htx2) {
    // htx.fillStyle = FILL_COLOR
    htx1!.fill.apply(htx1, args)
    htx2!.fill.apply(htx2, args)
  }
}
const stroke = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.stroke.apply(ctx, args)
  if (htx2) {
    // htx.strokeStyle = FILL_COLOR
    htx1!.stroke.apply(htx1, args)
    htx2!.stroke.apply(htx2, args)
  }
}

const putImageData = (ctx: CanvasRenderingContext2D, args: any) => {
  ctx.putImageData.apply(ctx, args)
}

const arc = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.arc.apply(ctx, args)
  if (htx2) {
    htx1!.arc.apply(htx1, args)
    htx2!.arc.apply(htx2, args)
  }
}
const arcTo = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.arcTo.apply(ctx, args)
  if (htx2) {
    htx1!.arcTo.apply(htx1, args)
    htx2!.arcTo.apply(htx2, args)
  }
}
const bezierCurveTo = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.bezierCurveTo.apply(ctx, args)
  if (htx2) {
    htx1!.bezierCurveTo.apply(htx1, args)
    htx2!.bezierCurveTo.apply(htx2, args)
  }
}
const closePath = (
  ctx: CanvasRenderingContext2D,
  _: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.closePath()
  if (htx2) {
    htx1!.closePath()
    htx2!.closePath()
  }
}
const ellipse = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.ellipse.apply(ctx, args)
  if (htx2) {
    htx1!.ellipse.apply(htx1, args)
    htx2!.ellipse.apply(htx2, args)
  }
}
const lineTo = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.lineTo.apply(ctx, args)
  if (htx2) {
    htx1!.lineTo.apply(htx1, args)
    htx2!.lineTo.apply(htx2, args)
  }
}
const moveTo = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.moveTo.apply(ctx, args)
  if (htx2) {
    htx1!.moveTo.apply(htx1!, args)
    htx2!.moveTo.apply(htx2!, args)
  }
}
const quadraticCurveTo = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.quadraticCurveTo.apply(ctx, args)
  if (htx2) {
    htx1!.quadraticCurveTo.apply(htx1, args)
    htx2!.quadraticCurveTo.apply(htx2, args)
  }
}
const rect = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.rect.apply(ctx, args)
  if (htx2) {
    htx1!.rect.apply(htx1, args)
    htx2!.rect.apply(htx2, args)
  }
}
const roundRect = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.roundRect.apply(ctx, args)
  if (htx2) {
    htx1!.roundRect.apply(htx1, args)
    htx2!.roundRect.apply(htx2, args)
  }
}

const setLineDash = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.setLineDash.apply(ctx, args)
  if (htx2) {
    htx1!.setLineDash.apply(htx1, args)
    htx2!.setLineDash.apply(htx2, args)
  }
}

const clearRect = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.clearRect.apply(ctx, args)
  if (htx2) {
    htx1!.clearRect.apply(htx1, args)
    htx2!.clearRect.apply(htx2, args)
  }
}
const fillRect = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.fillRect.apply(ctx, args)
  if (htx2) {
    // htx.fillStyle = FILL_COLOR
    htx1!.fillRect.apply(htx1, args)
    htx2!.fillRect.apply(htx2, args)
  }
}
const strokeRect = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.strokeRect.apply(ctx, args)
  if (htx2) {
    // htx.strokeStyle = FILL_COLOR
    htx1!.strokeRect.apply(htx1, args)
    htx2!.strokeRect.apply(htx2, args)
  }
}

// const restore = (
//   ctx: CanvasRenderingContext2D,
//   _: any,
//   htx1?: CanvasRenderingContext2D,
//   htx2?: CanvasRenderingContext2D
// ) => {
//   ctx.restore()
//   if (htx2) {
//     htx1!.restore()
//     htx2!.restore()
//   }
// }
// const save = (
//   ctx: CanvasRenderingContext2D,
//   _: any,
//   htx1?: CanvasRenderingContext2D,
//   htx2?: CanvasRenderingContext2D
// ) => {
//   ctx.save()
//   if (htx2) {
//     htx1!.save()
//     htx2!.save()
//   }
// }

const fillText = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.fillText.apply(ctx, args)
  if (htx2) {
    // htx.fillStyle = FILL_COLOR
    htx1!.fillText.apply(htx1, args)
    htx2!.fillText.apply(htx2, args)
  }
}
const strokeText = (
  ctx: CanvasRenderingContext2D,
  args: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.strokeText.apply(ctx, args)
  if (htx2) {
    // htx.strokeStyle = FILL_COLOR
    htx1!.strokeText.apply(htx1, args)
    htx2!.strokeText.apply(htx2, args)
  }
}

//
// sets
//
const globalAlpha = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.globalAlpha = val
}
const globalCompositeOperation = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.globalCompositeOperation = val
}

const fillStyle = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.fillStyle = val
}
const strokeStyle = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.strokeStyle = val
}

const filter = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.filter = val
}

const imageSmoothingEnabled = (
  ctx: CanvasRenderingContext2D,
  val: any
) => {
  ctx.imageSmoothingEnabled = val
}
const imageSmoothingQuality = (
  ctx: CanvasRenderingContext2D,
  val: any
) => {
  ctx.imageSmoothingQuality = val
}

const lineCap = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.lineCap = val
  if (htx2) {
    htx1!.lineCap = val
    htx2!.lineCap = val
  }
}
const lineDashOffset = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.lineDashOffset = val
  if (htx2) {
    htx1!.lineDashOffset = val
    htx2!.lineDashOffset = val
  }
}
const lineJoin = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.lineJoin = val
  if (htx2) {
    htx1!.lineJoin = val
    htx2!.lineJoin = val
  }
}
const lineWidth = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.lineWidth = val
  if (htx2) {
    htx1!.lineWidth = val
    htx2!.lineWidth = val
  }
}
const miterLimit = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.miterLimit = val
  if (htx2) {
    htx1!.miterLimit = val
    htx2!.miterLimit = val
  }
}

const shadowBlur = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.shadowBlur = val
}
const shadowColor = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.shadowColor = val
}
const shadowOffsetX = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.shadowOffsetX = val
}
const shadowOffsetY = (ctx: CanvasRenderingContext2D, val: any) => {
  ctx.shadowOffsetY = val
}

const direction = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.direction = val
  if (htx2) {
    htx1!.direction = val
    htx2!.direction = val
  }
}
const font = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.font = val
  if (htx2) {
    htx1!.font = val
    htx2!.font = val
  }
}
const fontKerning = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.fontKerning = val
  if (htx2) {
    htx1!.fontKerning = val
    htx2!.fontKerning = val
  }
}
const textAlign = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.textAlign = val
  if (htx2) {
    htx1!.textAlign = val
    htx2!.textAlign = val
  }
}
const textBaseline = (
  ctx: CanvasRenderingContext2D,
  val: any,
  htx1?: CanvasRenderingContext2D,
  htx2?: CanvasRenderingContext2D
) => {
  ctx.textBaseline = val
  if (htx2) {
    htx1!.textBaseline = val
    htx2!.textBaseline = val
  }
}

// prettier-ignore
export class _DrawContext {
  declare _a: [
    (
      ctx: CanvasRenderingContext2D, args?: any,
      htx1?: CanvasRenderingContext2D, htx2?: CanvasRenderingContext2D
    ) => void,
    any?
  ][]
  declare _c: CanvasRenderingContext2D
  declare layer: Layer
  // CanvasTransform
  declare angle: number
  declare scale: { x: number; y: number }
  declare place: { x: number; y: number }

  declare pivot: { x: number; y: number }

  declare readonly WIDTH: number
  declare readonly HEIGHT: number

  //
  // CanvasCompositing
  //
  set globalAlpha(value: number) {
    this._a.push([globalAlpha, value])
  }
  // GlobalCompositeOperation; "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor"
  set globalCompositeOperation(value: GlobalCompositeOperation) {
    this._a.push([globalCompositeOperation, value])
  }

  //
  // CanvasDrawImage
  //
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
  drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
  drawImage() {
    this._a.push([drawImage, arguments])
  }

  //
  // CanvasDrawPath
  //
  beginPath(): void
  beginPath() {
    this._a.push([beginPath])
  }
  // CanvasFillRule: "evenodd" | "nonzero"
  clip(fillRule?: CanvasFillRule): void
  clip(path: Path2D, fillRule?: CanvasFillRule): void
  clip() {
    this._a.push([clip, arguments])
  }
  fill(fillRule?: CanvasFillRule): void
  fill(path: Path2D, fillRule?: CanvasFillRule): void
  fill() {
    this._a.push([fill, arguments])
  }
  // isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  // isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
  // isPointInStroke(x: number, y: number): boolean;
  // isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(): void
  stroke(path: Path2D): void
  stroke() {
    this._a.push([stroke, arguments])
  }
  //
  // CanvasFillStrokeStyles
  //
  set fillStyle(value: string | CanvasGradient | CanvasPattern) {
    this._a.push([fillStyle, value])
  }
  set strokeStyle(value: string | CanvasGradient | CanvasPattern) {
    this._a.push([strokeStyle, value])
  }
  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient {
    return this._c.createConicGradient(startAngle, x, y)
  }
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
    return this._c.createLinearGradient(x0, y0, x1, y1)
  }
  createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null {
    return this._c.createPattern(image, repetition)
  }
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
    return this._c.createRadialGradient(x0, y0, r0, x1, y1, r1)
  }

  //
  // CanvasFilters
  //
  set filter(value: string) {
    this._a.push([filter, value])
  }

  //
  // CanvasImageData
  //
  // createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
  // createImageData(imagedata: ImageData): ImageData;
  // getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
  putImageData(imagedata: ImageData, dx: number, dy: number): void;
  putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
  putImageData() {
    this._a.push([putImageData, arguments])
  }


  //
  // CanvasImageSmoothing
  //
  set imageSmoothingEnabled(value: boolean) {
    this._a.push([imageSmoothingEnabled, value])
  }
  set imageSmoothingQuality(value: ImageSmoothingQuality) {
    this._a.push([imageSmoothingQuality, value])
  }

  //
  // CanvasPath
  //
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  arc() {
    this._a.push([arc, arguments])
  }
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
  arcTo() {
    this._a.push([arcTo, arguments])
  }
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
  bezierCurveTo() {
    this._a.push([bezierCurveTo, arguments])
  }
  closePath(): void
  closePath() {
    this._a.push([closePath])
  }
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  ellipse() {
    this._a.push([ellipse, arguments])
  }
  lineTo(x: number, y: number): void
  lineTo() {
    this._a.push([lineTo, arguments])
  }
  moveTo(x: number, y: number): void
  moveTo() {
    this._a.push([moveTo, arguments])
  }
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
  quadraticCurveTo() {
    this._a.push([quadraticCurveTo, arguments])
  }
  rect(x: number, y: number, w: number, h: number): void
  rect() {
    this._a.push([rect, arguments])
  }
  roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;
  roundRect() {
    this._a.push([roundRect, arguments])
  }

  //
  // CanvasPathDrawingStyles
  //
  set lineCap(value: CanvasLineCap) {
    this._a.push([lineCap, value])
  }
  set lineDashOffset(value: number) {
    this._a.push([lineDashOffset, value])
  }
  set lineJoin(value: CanvasLineJoin) {
    this._a.push([lineJoin, value])
  }
  set lineWidth(value: number) {
    this._a.push([lineWidth, value])
  }
  set miterLimit(value: number) {
    this._a.push([miterLimit, value])
  }
  // getLineDash(): number[];
  setLineDash(segments: number[]): void
  setLineDash() {
    this._a.push([setLineDash, arguments])
  }

  //
  // CanvasRect
  //
  clearRect(x: number, y: number, w: number, h: number): void;
  clearRect() {
    this._a.push([clearRect, arguments])
  }
  fillRect(x: number, y: number, w: number, h: number): void;
  fillRect() {
    this._a.push([fillRect, arguments])
  }
  strokeRect(x: number, y: number, w: number, h: number): void;
  strokeRect() {
    this._a.push([strokeRect, arguments])
  }

  //
  // CanvasShadowStyles
  //
  set shadowBlur(value: number) {
    this._a.push([shadowBlur, value])
  }
  set shadowColor(value: string) {
    this._a.push([shadowColor, value])
  }
  set shadowOffsetX(value: number) {
    this._a.push([shadowOffsetX, value])
  }
  set shadowOffsetY(value: number) {
    this._a.push([shadowOffsetY, value])
  }

  //
  // CanvasState
  //
  // restore(): void
  // restore() {
  //   this._a.push([restore])
  // }
  // save(): void
  // save() {
  //   this._a.push([save])
  // }

  //
  // CanvasText
  //
  fillText(text: string, x: number, y: number, maxWidth?: number): void
  fillText() {
    this._a.push([fillText, arguments])
  }
  measureText(text: string): TextMetrics {
    return this._c.measureText(text)
  }
  strokeText(text: string, x: number, y: number, maxWidth?: number): void
  strokeText() {
    this._a.push([strokeText, arguments])
  }

  //
  // CanvasTextDrawingStyles
  //
  set direction(value: CanvasDirection) {
    this._a.push([direction, value])
  }
  set font(value: string) {
    this._a.push([font, value])
  }
  set fontKerning(value: CanvasFontKerning) {
    this._a.push([fontKerning, value])
  }
  set textAlign(value: CanvasTextAlign) {
    this._a.push([textAlign, value])
  }
  set textBaseline(value: CanvasTextBaseline) {
    this._a.push([textBaseline, value])
  }
}
