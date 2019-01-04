import { Assemble } from "../../commands/assemble";

export class HTMLCanvasElement extends Assemble{

    /**
     * 
     * ```ts
     * getContext<WebGLRenderingContext>()
     * getContext<WebGL2RenderingContext>()
     * ```
     *
     * @author 
     * @date 2019-01-04
     * @template T
     * @returns {T}
     * @memberof HTMLCanvasElement
     */
    public getContext<T>(): T {
        return changetype<T>(memory.allocate(offsetof<T>()));
    }
}