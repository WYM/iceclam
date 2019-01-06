/**
 * 命令
 * command
 *
 * @export
 * @enum {number}
 */
export enum Command {
    invalid = 0,
    createCanvas = 1,
    getContext = 2,
    end = 9999
}


/**
 * 命令参数
 * command args
 *
 * @export
 * @enum {number}
 */
export enum CommandArgs {
    webgl = 1,
    webgl2,
}