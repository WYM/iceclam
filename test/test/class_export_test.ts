import * as fs from "fs";
import * as path from "path";
import * as util from "util";
import "mocha";
import { Worker } from 'worker_threads';
import * as Loader from '../../assemblyscript/lib/loader';
import { expect } from "chai";
const p = path.resolve(__dirname, "../../iceclam/build/test/class_export_test.wasm");
const buffer = fs.readFileSync(p);

let workerInst: Worker;

const myModule = Loader.instantiateBuffer(buffer, {
    env: {
        //@ts-ignore
        log(s: string) {
            let str = myModule.getString(s);
            console.log(str);
        },
        abort(mesg, file, line, colm) {
            throw Error("abort: " + mesg + " at " + file + ":" + line + ":" + colm);
        }
    },
    worker: {
        newWorker(paths: string) {
            let str = myModule.getString(paths);
            console.log("wokerpath:", str);
            workerInst = new Worker(path.resolve(__dirname, str));
        },
        postMessage(message: string) {
            console.log("message:" + message);
            workerInst.postMessage(message);
        },
        terminate() {
            workerInst.terminate();
        }
    }
});

let uint8Array = new util.TextEncoder().encode('./worker.js');
var ptr = myModule.newArray(uint8Array);
myModule.test(ptr, 1);