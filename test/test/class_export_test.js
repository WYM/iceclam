"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var util = require("util");
require("mocha");
var worker_threads_1 = require("worker_threads");
var Loader = require("../../assemblyscript/lib/loader");
var p = path.resolve(__dirname, "../../iceclam/build/test/class_export_test.wasm");
var buffer = fs.readFileSync(p);
var workerInst;
var myModule = Loader.instantiateBuffer(buffer, {
    env: {
        //@ts-ignore
        log: function (s) {
            var str = myModule.getString(s);
            console.log(str);
        },
        abort: function (mesg, file, line, colm) {
            throw Error("abort: " + mesg + " at " + file + ":" + line + ":" + colm);
        }
    },
    worker: {
        newWorker: function (paths) {
            var str = myModule.getString(paths);
            console.log("wokerpath:", str);
            workerInst = new worker_threads_1.Worker(path.resolve(__dirname, str));
        },
        postMessage: function (message) {
            console.log("message:" + message);
            workerInst.postMessage(message);
        },
        terminate: function () {
            workerInst.terminate();
        }
    }
});
var uint8Array = new util.TextEncoder().encode('./worker.js');
var ptr = myModule.newArray(uint8Array);
myModule.test(ptr, 1);
