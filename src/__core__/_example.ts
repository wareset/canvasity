// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction

// prettier-ignore
interface ICanvasRenderingContext2D {
  //
  // CanvasCompositing
  //
  globalAlpha: number;
  // GlobalCompositeOperation; "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor"
  globalCompositeOperation: GlobalCompositeOperation;

  //
  // CanvasDrawImage
  //
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
  drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

  //
  // CanvasDrawPath
  //
  beginPath(): void;
  // CanvasFillRule: "evenodd" | "nonzero"
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(): void;
  stroke(path: Path2D): void;

  //
  // CanvasFillStrokeStyles
  //
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;
  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

  //
  // CanvasFilters
  //
  filter: string;

  //
  // CanvasImageData
  //
  createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
  createImageData(imagedata: ImageData): ImageData;
  getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
  putImageData(imagedata: ImageData, dx: number, dy: number): void;
  putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

  //
  // CanvasImageSmoothing
  //
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;

  //
  // CanvasPath
  //
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  closePath(): void;
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;

  //
  // CanvasPathDrawingStyles
  //
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;
  getLineDash(): number[];
  setLineDash(segments: number[]): void;

  //
  // CanvasRect
  //
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;

  //
  // CanvasShadowStyles
  //
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;

  //
  // CanvasState
  //
  reset(): void;
  restore(): void;
  save(): void;

  //
  // CanvasText
  //
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;

  //
  // CanvasTextDrawingStyles
  //
  direction: CanvasDirection;
  font: string;
  fontKerning: CanvasFontKerning;
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;

  //
  // CanvasTransform
  //
  getTransform(): DOMMatrix;
  resetTransform(): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  setTransform(transform?: DOMMatrix2DInit): void;
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  translate(x: number, y: number): void;

  //
  // CanvasUserInterface
  //
  drawFocusIfNeeded(element: Element): void;
  // drawFocusIfNeeded(path: Path2D, element: Element): void;
}
