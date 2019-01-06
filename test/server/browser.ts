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
    public broswer: puppeteer.Browser;
    public page: puppeteer.Page;

    public async getBrowser(options: puppeteer.LaunchOptions = { headless: false } as puppeteer.LaunchOptions): Promise<void> {
        this.broswer = await puppeteer.launch(options);
        this.page = await this.broswer.newPage();
    }

    public toPage(url: string): void {
        this.page.goto(url);
    }
}