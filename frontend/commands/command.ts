import { BackendInterop } from "../interop/backend";
import { Command } from "../../command/command";
import { gl } from "../api/gl";

/**
 *
 *
 * @author 
 * @date 2019-01-05
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
        console.log(buffer);
        
        let args = [];
        for (let i = 1, l = buffer.length; i < l; i++) {
            const command = buffer[i];
            if (command === 9999) {
                return;
            }
            console.log(command);

            args.length = 0;
            const argsCount = command % 10;

            console.log(argsCount);

            if (argsCount) {
                for (; i < i + argsCount; i++) {
                    args[args.length++] = buffer[i];
                }
            }

            console.log(args);

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