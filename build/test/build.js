"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var asc = require("../../assemblyscript/cli/asc");
var assemblyscript = require("../../assemblyscript/dist/assemblyscript.js");
var path = require("path");
var fs = require("fs");
//编译脚本不允许使用绝对路径
//const testbuild = path.resolve(__dirname, "../../iceclam/test/build/main_class.ts");
var decorator = [];
var DecoratorMetadata = /** @class */ (function () {
    function DecoratorMetadata() {
        this.parameters = [];
    }
    return DecoratorMetadata;
}());
var stats = asc.createStats();
var MyParser = /** @class */ (function (_super) {
    __extends(MyParser, _super);
    function MyParser() {
        return _super.call(this) || this;
    }
    MyParser.prototype.parseFile = function (text, path, isEntry) {
        _super.prototype.parseFile.call(this, text, path, isEntry);
    };
    MyParser.prototype.parseTopLevelStatement = function (tn, namespace) {
        if (namespace === void 0) { namespace = null; }
        var p = _super.prototype.parseTopLevelStatement.call(this, tn, namespace);
        if (p.decorators) {
            var metadata = new DecoratorMetadata();
            var decorators = p.decorators;
            for (var i = 0, l = decorators.length; i < l; i++) {
                var decorator_1 = decorators[i];
                if (decorator_1.name.text !== "external") {
                    continue;
                }
                var args = decorator_1.arguments;
                if (args) {
                    for (var i_1 = 0, l_1 = args.length; i_1 < l_1; i_1++) {
                        var arg = args[i_1];
                        //只处理gl相关的装饰器
                        if (i_1 == 0 && arg.value !== 'gl') {
                            return p;
                        }
                        switch (i_1) {
                            case 0:
                                metadata.module = arg.value;
                                break;
                            case 1:
                                metadata.func = arg.value;
                                break;
                        }
                    }
                }
                var parent_1 = decorator_1.parent;
                if (parent_1) {
                    var signature = parent_1.signature;
                    if (signature) {
                        var parameters = signature.parameters;
                        for (var i_2 = 0, l_2 = parameters.length; i_2 < l_2; i_2++) {
                            var parameter = parameters[i_2];
                            metadata.parameters.push({
                                name: parameter.name.text,
                                type: parameter.type.name.text
                            });
                        }
                    }
                }
            }
        }
        return p;
    };
    MyParser.prototype.parseParameters = function (tn, isConstructor) {
        if (isConstructor === void 0) { isConstructor = false; }
        var p = _super.prototype.parseParameters.call(this, tn, isConstructor);
        return p;
    };
    MyParser.prototype.parseClassMember = function (tn, parent) {
        var p = _super.prototype.parseClassMember.call(this, tn, parent);
        return p;
    };
    MyParser.prototype.parseDecorator = function (tn) {
        var p = _super.prototype.parseDecorator.call(this, tn);
        return p;
    };
    return MyParser;
}(assemblyscript.Parser));
var parser = new MyParser();
asc.main([
    "../../iceclam/test/build/main_class.ts",
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
    readFile: function (filename, baseDir) {
        try {
            var text_1;
            stats.readCount++;
            stats.readTime += asc.measure(function () {
                text_1 = fs.readFileSync(path.join(baseDir, filename), { encoding: "utf8" });
            });
            parser.parseFile(text_1, path.join(baseDir, filename), true);
            return text_1;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}, function (err) {
    if (err)
        throw err;
    debugger;
});
