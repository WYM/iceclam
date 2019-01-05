/**
 * 命令
 * command
 *
 * @export
 * @enum {number}
 */
export const enum Command {
    invalid,
    createCanvas,
    getContext,
    end = 9999
}


/**
 * 命令参数
 * command args
 *
 * @export
 * @enum {number}
 */
export const enum CommandArgs {
    webgl = 1,
    webgl2,
}