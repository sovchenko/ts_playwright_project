import { Page } from 'playwright'
import IWebElement from '../../../core/ui/elements/i-webelement';
import PlaywrighWebElement from '../../../core/ui/elements/playwright-webelement';
import WdioWebElement from '../../../core/ui/elements/wdio-webelement';
import { page } from '../../../specs/ui/hooks';

export default class BasePage {
    readonly page: Page;

    constructor() {
        this.page = page;
    }

    async openHomePage(): Promise<BasePage> {
        await this.page.goto('');
        await this.page.waitForLoadState("networkidle");
        return this;
    }

    async findElement(locator: string): Promise<IWebElement> {
        if (page !== undefined) {
            return new PlaywrighWebElement(page, locator);
        } else {
            return new WdioWebElement(locator)
        }
    }

    async waitFor(locator: string, state: "attached" | "detached" | "visible" | "hidden", timeout: number) {
        this.page.waitForSelector(locator, {
            state: state,
            timeout: timeout
        })
    }
}