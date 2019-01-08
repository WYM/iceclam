import { CommandArgs, Command } from "../../command/command";

interface glsys {
    [id: number]: any;
    1: HTMLCanvasElement
}

/**
 * gl warpper
 *
 * @author 
 * @export
 * @class gl
 */
export class gl {
    private _obj: glsys;

    public constructor() {
        this._obj = {} as glsys;
    }

    /**
     * 创建画布
     * create canvas
     * 
     * @author 
     * @param {number} id
     * @param {number} [width=800]
     * @param {number} [height=600]
     * @memberof gl
     */
    public createCanvas(id: number, width: number = 800, height: number = 600): void {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        this._obj[id] = canvas;
    }

    /**
     * 获取上下文
     * get context
     * 
     * WebGL上下文属性:
     * alpha: boolean值表明canvas包含一个alpha缓冲区。
     * depth: boolean值表明绘制缓冲区包含一个深度至少为16位的缓冲区。
     * stencil: boolean值表明绘制缓冲区包含一个深度至少为8位的模版缓冲区。
     * antialias: boolean值表明是否抗锯齿。
     * premultipliedAlpha: boolean值表明页面排版工人将在混合alpha通道前承担颜色缓冲区。
     * preserveDrawingBuffer: 如果这个值为true缓冲区将不会清除它，会保存下来，直到被清除或被使用者覆盖。
     * failIfMajorPerformanceCaveat: boolean值表明在一个系统性能低的环境创建该上下文。
     *
     * @author 
     * @param {number} id
     * @param {CommandArgs} command
     * @memberof gl
     */
    public getContext(id: number, command: CommandArgs): void {
        let canvas = this._obj[1];
        let gl: WebGLRenderingContext;

        if (command === CommandArgs.webgl) {
            try {
                gl = canvas.getContext('webgl') as WebGLRenderingContext
                    || canvas.getContext('experimental-webgl') as WebGLRenderingContext
                    || canvas.getContext('webkit-3d') as WebGLRenderingContext
                    || canvas.getContext('moz-webgl') as WebGLRenderingContext;
            } catch (err) {
                throw err;
            }
        }
        this._obj[id] = gl;
    }
}