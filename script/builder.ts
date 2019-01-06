import * as asc from "assemblyscript/cli/asc";
import * as assemblyscript from "assemblyscript/dist/assemblyscript";
import * as path from "path";
import * as fs from "fs";

export class Builder {
    public static build(paths: string, out: string, callback: (err: Error) => number, opts?: string[]): void {
        asc.main([
            paths,
            "--binaryFile",
            out,
            "--optimize",
            "--sourceMap",
            "--measure"
        ], callback);
    }
}