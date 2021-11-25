import { Page } from "playwright";
import PlaywrighWebElement from "./playwright-webelement";
import WdioWebElement from "./wdio-webelement";
import IWebElement from "./i-webelement";

export default class WebELementUtils {

    static findElement(locator: string, page?: Page): IWebElement {
        if (page !== undefined) {
            return new PlaywrighWebElement(page, locator);
        } else {
            return new WdioWebElement(locator)
        }
    }
}
