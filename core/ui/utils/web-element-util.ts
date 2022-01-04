import { Page } from "playwright";
import PlaywrighWebElement from "../elements/playwright-webelement"
import WdioWebElement from "../elements/wdio-webelement";
import IWebElement from "../elements/i-webelement";

export async function findElement(locator: string, page?: Page,): Promise<IWebElement> {
    if (page !== undefined) {
        return new PlaywrighWebElement(page, locator);
    } else {
        return new WdioWebElement(locator)
    }
}

export async function waitFor(page: Page, locator: string, state: "attached" | "detached" | "visible" | "hidden", timeout: number = 5000) {
    await page.waitForSelector(locator, {
        state: state,
        timeout: timeout
    })
}




