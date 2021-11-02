import { Browser, chromium, Page } from 'playwright'

export class BasePage {
    // browser!: Browser;
    // page!: Page;

    async openHomePage(page: Page): Promise<BasePage> {
        //using base url for the page
        await page.goto('');
        await page.waitForLoadState("networkidle");
        return this;
    }
} 