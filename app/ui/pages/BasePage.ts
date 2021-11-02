import { Browser, chromium, Page } from 'playwright'

export class BasePage {

    async openHomePage(page: Page): Promise<BasePage> {
        //using base url for the page
        await page.goto('');
        await page.waitForLoadState("networkidle");
        return this;
    }
} 