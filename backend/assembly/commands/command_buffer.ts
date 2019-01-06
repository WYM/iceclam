import { Command, CommandArgs } from "./command";

// @ts-ignore
@external("command", "commit")
declare function commit(array: Float64Array): void;

let id: f64 = 0;

/**
 * 命令缓冲
 * command buffer
 *
 * @author 
 * @date 2019-01-04
 * @export
 * @class CommandBuffer
 */
export class CommandBuffer {

    /**
     * 写入池
     * buffer 
     * 
     * ---command---args---id----command---args---id~~~
     *
     * @private
     * @type {Float64Array}
     * @memberof CommandBuffer
     */
    private _buffer: Float64Array;

    /**
     * 指针偏移
     * pointer offset
     *
     * @private
     * @type {i32}
     * @memberof CommandBuffer
     */
    private _offset: i32;

    /**
     * 
     *
     * @private
     * @static
     * @type {CommandBuffer}
     * @memberof CommandBuffer
     */
    private static _assemblebuffer: CommandBuffer;

    /**
     * 
     *
     * @private
     * @static
     * @type {CommandBuffer}
     * @memberof CommandBuffer
     */
    private static _disasemblebuffer: CommandBuffer;

    /**
     * 命令缓冲
     * command buffer
     * 
     * @author 
     * @date 2019-01-04
     * @memberof CommandBuffer
     */
    public constructor() {
        this._buffer = new Float64Array(4096);
        this._offset = 0;
    }

    /**
     * 写入一个值
     *
     * @author 
     * @date 2019-01-05
     * @param {CommandArgs} arg0
     * @memberof CommandBuffer
     */
    public write(arg0: f64): void {
        unchecked(this._buffer[this._offset++] = arg0);
    }

    /**
     * 写入不需要参数的命令
     * Write commands that do not require parameters
     * 
     * @author 
     * @date 2019-01-05
     * @param {Command} command
     * @memberof CommandBuffer
     */
    @inline
    public writeZeroArgsCommand(command: Command): void {
        unchecked(this._buffer[this._offset++] = (<f64>command) * 10 + 0);
    }

    /**
     * 写入需要一个参数的命令
     * write a command that requires one argument
     *
     * @author 
     * @date 2019-01-05
     * @template T
     * @param {Command} command
     * @param {T} arg0
     * @memberof CommandBuffer
     */
    @inline
    public writeOneArgsCommand(command: Command, arg0: CommandArgs): void {
        unchecked(this._buffer[this._offset++] = (<f64>command) * 10 + 1);
        unchecked(this._buffer[this._offset++] = arg0);
    }

    /**
     * 提交缓冲区的命令
     * commit buffer command
     *
     * @author 
     * @date 2019-01-05
     * @memberof CommandBuffer
     */
    @inline
    public commit(): void {
        unchecked(this._buffer[this._offset++] = Command.end);
        unchecked(this._buffer[this._offset++] = this._offset);
        commit(this._buffer);
        this.reset();
    }

    /**
     * 
     * 将已经提交的命令缓冲区重置
     * reset the already committed command buffer
     * 
     * @author 
     * @date 2019-01-05
     * @private
     * @memberof CommandBuffer
     */
    @inline
    private reset(): void {
        for (let i = 0, l = this._offset; i < l; i++) {
            unchecked(this._buffer[this._offset++] = Command.invalid);
        }

        this._offset = 0;
    }

    /**
     * 获得一个唯一的命令缓冲组装器
     * get a unique command buffer assembler
     * 
     * @author 
     * @date 2019-01-04
     * @static
     * @returns {CommandBuffer}
     * @memberof CommandBuffer
     */
    @inline
    public static assembleBuffer(): CommandBuffer {
        if (!CommandBuffer._assemblebuffer) {
            CommandBuffer._assemblebuffer = new CommandBuffer();
        }

        return CommandBuffer._assemblebuffer;
    }

    /**
     * 获得一个唯一的命令缓冲拆卸器
     * get a unique command buffer disasemble
     * 
     * @author 
     * @date 2019-01-04
     * @static
     * @returns {CommandBuffer}
     * @memberof CommandBuffer
     */
    @inline
    public static disasembleBuffer(): CommandBuffer {
        if (!CommandBuffer._disasemblebuffer) {
            CommandBuffer._disasemblebuffer = new CommandBuffer();
        }

        return CommandBuffer._disasemblebuffer;
    }

    /**
     * 获取一个唯一个ID
     * get a unique ID
     *
     * @author 
     * @date 2019-01-05
     * @static
     * @returns {f64}
     * @memberof CommandBuffer
     */
    @inline
    public static gID(): f64 {
        return id++;
    }
}