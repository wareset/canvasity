import type { Layer } from './Layer';
type CanvasImageSource = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | OffscreenCanvas;
export declare class _DrawContext {
    _a: [
        (ctx: CanvasRenderingContext2D, args?: any, htx1?: CanvasRenderingContext2D, htx2?: CanvasRenderingContext2D) => void,
        any?
    ][];
    _c: CanvasRenderingContext2D;
    layer: Layer;
    angle: number;
    scale: {
        x: number;
        y: number;
    };
    place: {
        x: number;
        y: number;
    };
    pivot: {
        x: number;
        y: number;
    };
    readonly WIDTH: number;
    readonly HEIGHT: number;
    set globalAlpha(value: number);
    set globalCompositeOperation(value: GlobalCompositeOperation);
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    stroke(): void;
    stroke(path: Path2D): void;
    set fillStyle(value: string | CanvasGradient | CanvasPattern);
    set strokeStyle(value: string | CanvasGradient | CanvasPattern);
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
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
    set lineCap(value: CanvasLineCap);
    set lineDashOffset(value: number);
    set lineJoin(value: CanvasLineJoin);
    set lineWidth(value: number);
    set miterLimit(value: number);
    setLineDash(segments: number[]): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    set shadowBlur(value: number);
    set shadowColor(value: string);
    set shadowOffsetX(value: number);
    set shadowOffsetY(value: number);
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    set font(value: string);
    set textAlign(value: CanvasTextAlign);
    set textBaseline(value: CanvasTextBaseline);
}
export {};
