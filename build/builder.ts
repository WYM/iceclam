import * as asc from "../node_modules/assemblyscript/cli/asc";
import * as options from "../node_modules/assemblyscript/cli/asc.json";
import * as assemblyscript from "../node_modules/assemblyscript/dist/assemblyscript.js";
import * as path from "path";
import * as fs from "fs";

export class Builder {
    public static build(paths: string, opts: string[]): void {
        asc.main([
            paths,
            "--binaryFile",
            "testbuild.wasm",
            "--optimize",
            "--sourceMap",
            "--measure"
        ], {
                //@ts-ignore
                stdout: process.stdout,

                //@ts-ignore
                stderr: process.stderr,

                //@ts-ignore
                readFile: (filename, baseDir) => {
                    try {
                        let text;
                        stats.readCount++;
                        stats.readTime += asc.measure(() => {
                            text = fs.readFileSync(path.join(baseDir, filename), { encoding: "utf8" });
                        });
                        parser.parseFile(text, path.join(baseDir, filename), true);
                        return text;
                    } catch (e) {
                        console.log(e);
                        return null;
                    }
                }
            }, function (err) {
                if (err)
                    throw err;

                console.log(decorator);
            });
    }
}