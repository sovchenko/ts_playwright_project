import { Browser, chromium, Page } from 'playwright'

export class BasePage {

    //* this class should contain some shared logic between all the pages

    async openHomePage(page: Page): Promise<BasePage> {
        //using base url for the page
        await page.goto('');
        await page.waitForLoadState("networkidle");
        return this;
    }
} 