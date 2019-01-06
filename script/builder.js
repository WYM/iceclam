"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asc = require("assemblyscript/cli/asc");
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.build = function (paths, out, callback, opts) {
        asc.main([
            paths,
            "--binaryFile",
            out,
            "--optimize",
            "--sourceMap",
            "--measure"
        ], callback);
    };
    return Builder;
}());
exports.Builder = Builder;
