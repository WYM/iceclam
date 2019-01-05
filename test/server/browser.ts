import * as puppeteer from 'puppeteer';

/**
 * 浏览器对象
 * broswer object
 *
 * @author 
 * @date 2019-01-05
 * @class Browser
 */
export class Browser {
    private _broswer: puppeteer.Browser;
    private _page: puppeteer.Page;

    public async getBrowser(options: puppeteer.LaunchOptions = { headless: false } as puppeteer.LaunchOptions): Promise<void> {
        this._broswer = await puppeteer.launch(options);
        this._page = await this._broswer.newPage();
    }

    public toPage(url: string): void {
        this._page.goto(url);
    }
}