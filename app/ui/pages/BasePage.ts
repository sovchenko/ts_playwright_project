import { Browser, chromium, Page } from 'playwright'

export class BasePage {
    // browser!: Browser;
    // page!: Page;

    //* think about the implementation of the different browser launch

    async openHomePage(): Promise<BasePage> {
        const browser = await chromium.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://www.google.com/intl/uk/gmail/about/');
        return this;
    }
} 
module.exports = { BasePage }