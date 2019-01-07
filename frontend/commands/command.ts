import { BackendInterop } from "../interop/backend";
import { Command } from "../../command/command";
import { gl } from "../api/gl";

/**
 *
 *
 * @author 
 * @export
 * @class Command
 */
export class CommandParser<T> {
    private _gl: gl;
    public backendInterop!: BackendInterop<T>;
    public getCommand(): CommandParser<T> {
        return {
            commit: this.commit.bind(this)
        } as CommandParser<T>;
    }

    public constructor() {
        this._gl = new gl();
    }

    public commit(ptr: number): void {
        const gl = this._gl;
        const buffer = this.backendInterop.module.getArray<Int32Array>(Int32Array, ptr);
        let args = [];
        for (let i = 1, l = buffer.length; i < l; i++) {
            let command = buffer[i];
            if (command === Command.end) {
                return;
            }
            args.length = 0;
            const argsCount = command % 10;
            command = (command - argsCount) / 10;
            if (argsCount) {
                i++;
                args.length = 1;
                for (let count = i + argsCount; i < count; ++i) {
                    args[args.length++] = buffer[i];
                }
                args[0] = buffer[i];
            } else {
                args[0] = buffer[++i];
            }

            const wrapper = (<any>gl)[Command[command]] as Function;
            if (wrapper) {
                wrapper.apply(gl, args);
            } else {
                console.warn('functon is not impl', Command[command]);
            }
        }
    }

    public abort(msg: number, file: number, line: number, column: number): void {
        console.log(msg, file, line, column);
    }
}