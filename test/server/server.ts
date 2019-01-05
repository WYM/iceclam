import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from "path";
import * as yargs from 'yargs';
import { Browser } from "./browser";

const argvs = yargs.argv;

const app = new Koa();
app.use(serve(
    path.join(__dirname, './')
));

const callback = async () => {
    const file = argvs.file;
    const browser = new Browser();
    await browser.getBrowser();
    browser.toPage('http://127.0.0.1:3000/');

    console.log('starting at port 3000', file);
}

app.listen(3000, callback);