import devices from 'puppeteer/DeviceDescriptors';
import puppeteer from 'puppeteer';
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(devices['iPhone X']);
    await page.goto('http://www.baidu.com');
})();
