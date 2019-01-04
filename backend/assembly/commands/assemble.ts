import { CommandBuffer } from "./command_buffer";

/**
 * 命令缓冲组装器
 * command buffer assembler
 *
 * @author 
 * @date 2019-01-04
 * @export
 * @class Assemble
 */
export class Assemble {

    /**
     * 命令缓冲
     * command buffer
     * 
     * @private
     * @type {CommandBuffer}
     * @memberof Assemble
     */
    private _commandbuffer: CommandBuffer;

    /**
     * 命令缓冲组装器,是把整个绘图api调用抽象成为指令调用.在fontend会有抽象命令拆卸器将命令转化为真正的绘图api调用
     * 
     * The command buffer assembler abstracts the entire drawing api call into an instruction call. 
     * In the fontend there will be an abstract command detacher that converts the command into a real drawing api call.
     * 
     * Creates an instance of Assemble.
     * @author 
     * @date 2019-01-04
     * @memberof Assemble
     */
    public constructor() {
        this._commandbuffer = new CommandBuffer();
    }
}