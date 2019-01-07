import "allocator/tlsf";
import { CommandBuffer } from "./command_buffer";

/**
 * 命令缓冲拆卸器
 * command buffer disasemble
 *
 * @author 
 * @export
 * @class Disasemble
 */
export class Disasemble {

    /**
     * 命令缓冲
     * command buffer
     * 
     * @private
     * @type {CommandBuffer}
     * @memberof Disasemble
     */
    private _commandbuffer: CommandBuffer;

    /**
     * 命令缓冲拆卸器,是把绘图调用返回抽象成为调用指令
     * The command buffer disasemble is to abstract the drawing call back into a call instruction.
     * 
     * @author 
     * @date 2019-01-04
     * @memberof Disasemble
     */
    public constructor() {
        this._commandbuffer = CommandBuffer.disasembleBuffer();
    }
}