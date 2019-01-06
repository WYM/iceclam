import { Assemble } from "../../commands/assemble";
import { Command, CommandArgs } from "../../commands/command";
import { WebGLRenderingContext } from "../gl/gl_webgl_rendering_context";
import { WebGL2RenderingContext } from "../gl/gl_webgl2_rendering_context";
import "allocator/tlsf";
// import { WebElement } from "./document";

export class HTMLCanvasElement extends Assemble{

    /**
     * 初始化
     * initialize
     *
     * @author 
     * @date 2019-01-05
     * @memberof HTMLCanvasElement
     */
    public initialize(): void {
        this.writeZeroArgsCommand(Command.createCanvas);
    }

    /**
     * 
     * 
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
    public getContext<T>(): T | null {
        let inst = instantiate<T>();
        if (inst instanceof WebGLRenderingContext) {
            inst.writeOneArgsCommand(Command.getContext, CommandArgs.webgl);
        } else if (inst instanceof WebGL2RenderingContext) {
            inst.writeOneArgsCommand(Command.getContext, CommandArgs.webgl2);
        } else {
            assert(false, 'getContext args mut be WebGLRenderingContext or WebGL2RenderingContext');
            return null;
        }
        return inst;
    }
}