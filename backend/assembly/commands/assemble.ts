import "allocator/tlsf";
import { CommandBuffer } from "./command_buffer";
import { Command, CommandArgs } from "../../../command/command";

/**
 * 命令缓冲组装器
 * command buffer assembler
 *
 * @author 
 * @export
 * @class Assemble
 */
export class Assemble {

    /**
     * 唯一ID
     * Unique ID
     *
     * @type {f64}
     * @memberof Assemble
     */
    public id: i32 = CommandBuffer.gID();

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
     * @memberof Assemble
     */
    public constructor() {
        this._commandbuffer = CommandBuffer.assembleBuffer();
    }

    /**
     * 写入不需要参数的命令
     * write commands that do not require parameters
     *
     * @author 
     * @protected
     * @param {Command} command
     * @memberof Assemble
     */
    public writeZeroArgsCommand(command: Command): void {
        this._commandbuffer.writeZeroArgsCommand(command);
        this._commandbuffer.write(this.id);
    }

    /**
     * 写入需要一个参数的命令
     * write a command that requires one argument
     *
     * @author 
     * @protected
     * @param {Command} command
     * @param {CommandArgs} arg0
     * @memberof Assemble
     */
    public writeOneArgsCommand(command: Command, arg0: CommandArgs): void {
        this._commandbuffer.writeOneArgsCommand(command, arg0);
        this._commandbuffer.write(this.id);
    }

    /**
     * 提交缓冲区的命令
     * Commit buffer command
     *
     * @author 
     * @memberof Assemble
     */
    public commit(): void {
        this._commandbuffer.commit();
    }
}