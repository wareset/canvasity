import type { Renderer } from './Renderer';
import type { _DrawContext } from './DrawContext';
interface ILoopList {
    p: ILoopList;
    n: ILoopList;
    f: (...a: any) => any;
}
export declare class Paint {
    draw: (ctx: _DrawContext) => void;
    readonly renderer: Renderer;
    readonly parent: Paint | null;
    readonly children: Readonly<Paint[]>;
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
    _ecolor1: string;
    _ecolor2: string;
    transform: DOMMatrix;
    _rendering: boolean;
    constructor(renderer: Paint['renderer'], draw: Paint['draw']);
    paint(draw: Paint['draw']): Paint;
    render(): void;
    update(): void;
    attach(shape: Paint, index?: number): void;
    detach(): void;
    _ecount: number;
    _events: {
        [key: string]: ILoopList;
    };
    event<Type extends keyof GlobalEventHandlersEventMap>(type: Type, callback: (this: Paint, e: GlobalEventHandlersEventMap[Type], rect: DOMRect) => boolean): () => void;
}
export {};
