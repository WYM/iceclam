import * as asc from "../../node_modules/assemblyscript/cli/asc";
import * as options from "../../node_modules/assemblyscript/cli/asc.json";
import * as assemblyscript from "../../node_modules/assemblyscript/dist/assemblyscript.js";
import * as path from "path";
import * as fs from "fs";

//编译脚本不允许使用绝对路径
//const testbuild = path.resolve(__dirname, "../../iceclam/test/build/main_class.ts");
const decorator = [];

class DecoratorMetadata {
    public module: string;
    public func: string;
    public parameters: Array<{
        name: string,
        type: string
    }> = [];
}

const stats = asc.createStats();
class MyParser extends assemblyscript.Parser {

    public constructor() {
        super();
    }

    parseFile(
        text: string,
        path: string,
        isEntry: boolean
    ): void {
        super.parseFile(text, path, isEntry);
    }

    parseTopLevelStatement(
        tn: assemblyscript.Tokenizer,
        namespace: assemblyscript.Node | null = null
    ): assemblyscript.Statement | null {
        const p = super.parseTopLevelStatement(tn, namespace);

        if (p.decorators) {
            const metadata = new DecoratorMetadata();

            const decorators = p.decorators;
            for (let i = 0, l = decorators.length; i < l; i++) {
                const decorator = decorators[i];
                if (decorator.name.text !== "external") {
                    continue;
                }

                const args = decorator.arguments;
                if (args) {
                    for (let i = 0, l = args.length; i < l; i++) {
                        const arg = args[i];

                        //只处理gl相关的装饰器
                        if (i == 0 && arg.value !== 'gl') {
                            return p;
                        }

                        switch (i) {
                            case 0:
                                metadata.module = arg.value;
                                break;
                            case 1:
                                metadata.func = arg.value;
                                break;
                        }
                    }
                }

                const parent = decorator.parent;
                if (parent) {
                    const signature = parent.signature;
                    if (signature) {
                        const parameters = signature.parameters;
                        for (let i = 0, l = parameters.length; i < l; i++) {
                            const parameter = parameters[i];
                            metadata.parameters.push({
                                name: parameter.name.text,
                                type: parameter.type.name.text
                            });
                        }
                    }
                }
            }

            decorator.push(metadata);
        }
        return p;
    }

    parseParameters(
        tn: assemblyscript.Tokenizer,
        isConstructor: boolean = false
    ): assemblyscript.ParameterNode[] | null {
        const p = super.parseParameters(tn, isConstructor);
        return p;
    }

    parseClassMember(
        tn: assemblyscript.Tokenizer,
        parent: assemblyscript.ClassDeclaration
    ): assemblyscript.DeclarationStatement | null {
        const p = super.parseClassMember(tn, parent);
        return p;
    }

    parseDecorator(
        tn: assemblyscript.Tokenizer
    ): assemblyscript.DecoratorNode | null {
        const p = super.parseDecorator(tn);
        return p;
    }
}

const parser = new MyParser();

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