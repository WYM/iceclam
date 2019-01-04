
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
     *
     * @private
     * @type {Float64Array}
     * @memberof CommandBuffer
     */
    private _buffer: Float64Array;

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
        this._buffer = new Float64Array(2 ** 12);
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
        if (!this._assemblebuffer) {
            this._assemblebuffer = new CommandBuffer();
        }

        return this._assemblebuffer;
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
        if (!this._disasemblebuffer) {
            this._disasemblebuffer = new CommandBuffer();
        }

        return this._disasemblebuffer;
    }
}