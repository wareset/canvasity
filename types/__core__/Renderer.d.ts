import { Layer } from './Layer';
import { _DrawContext } from './DrawContext';
export declare class Renderer {
    readonly canvas: HTMLCanvasElement;
    readonly hidden1: HTMLCanvasElement;
    readonly hidden2: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly htx1: CanvasRenderingContext2D;
    readonly htx2: CanvasRenderingContext2D;
    readonly dtx: _DrawContext;
    readonly stage: Layer;
    _ucaf: null | number;
    private readonly _update;
    _layers: Layer[];
    _rendering: boolean;
    constructor(canvas?: HTMLCanvasElement);
    layer(draw: Layer['draw']): Layer;
    resize(width: number, height: number): void;
    render(): void;
    attach(shape: Layer, index?: number): void;
    detachChildren(): void;
    update(): void;
    _events: {
        [key: string]: {
            n: number;
            u: () => void;
        };
    };
    _event(type: keyof GlobalEventHandlersEventMap, isAdd: boolean): void;
}
