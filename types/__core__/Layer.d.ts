import type { Renderer } from './Renderer';
import type { _DrawContext } from './DrawContext';
interface ILoopList {
    p: ILoopList;
    n: ILoopList;
    f: (...a: any) => any;
}
export declare class Layer {
    draw: (ctx: _DrawContext) => void;
    readonly renderer: Renderer | null;
    readonly parent: Layer | null;
    readonly children: Readonly<Layer[]>;
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
    private _ecolor1;
    private _ecolor2;
    private _transform;
    private _rendering;
    readonly shared: {
        [key: string]: any;
    };
    constructor(draw: Layer['draw']);
    layer(draw: Layer['draw']): Layer;
    render(): void;
    attach(shape: Layer, index?: number): void;
    detach(): void;
    detachChildren(): void;
    _ecount: number;
    _events: {
        [key: string]: ILoopList;
    };
    event<Type extends keyof GlobalEventHandlersEventMap>(type: Type, callback: (this: Layer, e: GlobalEventHandlersEventMap[Type], rect: DOMRect) => boolean): () => void;
}
export {};
