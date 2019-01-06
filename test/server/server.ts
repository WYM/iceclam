import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from "path";
import * as yargs from 'yargs';
import * as fs from "fs";
import { CommandParser } from '../../frontend/commands/command';
import { BackendInterop } from "../../frontend/interop/backend";
import { Builder } from '../../script/builder';
import { Browser } from "./browser";

const argvs = yargs.argv;

const app = new Koa();
app.use(serve(
    path.join(__dirname, './')
));

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