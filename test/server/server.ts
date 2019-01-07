import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from "path";
import * as yargs from 'yargs';
import * as fs from "fs";
import * as ts from "ts-node";
import * as Router from 'koa-router';

import { CommandParser } from '../../frontend/commands/command';
import { BackendInterop } from "../../frontend/interop/backend";
import { Builder } from '../../script/builder';
import { Browser } from "./browser";

const argvs = yargs.argv;

const app = new Koa();
if (argvs.puppeteer) {
    app.use(serve(
        path.join(__dirname, './')
    ));
} else {
    const file = argvs.file as string;
    // let string = ts.register({
    //     project: '../tsconfig.json'
    // }).compile(fs.readFileSync(path.relative(__dirname, './index.ts')).toString('utf-8'), path.relative(__dirname, './index.ts'));
    // string = string.replace("$file", file);

    let router = new Router()
    router.get("/wasm/*", ctx => {
        const url = ctx.request.url;
        const buffer = fs.readFileSync(path.relative(__dirname, '..' + url));
        ctx.body = buffer;
    });


    let string = fs.readFileSync('./dist/bundle.js').toString('utf-8');
    string = string.replace("$file", file);
    // console.log(string);

    router.get('/', ctx => {
        ctx.response.type = 'html';
        ctx.body = `
        <html>
            <head>
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type"/>
            </head>
            <body>
                <script>
                    ${string}
                </script>
            </body>
        </html>      
        `
    });
    app.use(router.routes()).use(router.allowedMethods());
}

const compile = async (file: string) => {
    return new Promise<void>(r => {
        Builder.build(`../../backend/test/webapi/${file}.ts`, `../wasm/${file}.wasm`, (err: Error) => {
            if (err) {
                throw err;
            }

            r();
            return 0;
        });
    });
}

const callback = async () => {
    const file = argvs.file as string;
    if (!argvs.puppeteer) {
        await compile(file);
        console.log('starting at port 3000');
        return;
    }

    await compile(file);
    const browser = new Browser();
    await browser.getBrowser();
    browser.toPage('http://127.0.0.1:3000/');
    await browser.page.exposeFunction('parser', () => {
        return new Promise<void>(async r => {
            const filepath = path.relative(__dirname, `../wasm/${file}.wasm`);
            const buffer = fs.readFileSync(filepath);
            const interop = new BackendInterop<CommandParser<{}> & { test(): void }>();
            await interop.init(void 0, buffer);
            interop.module.test();
            r();
        });
    });

    browser.page.evaluate(async () => {
        await window['parser']();
    });

    console.log('starting at port 3000', file);
}

app.listen(3000, callback);