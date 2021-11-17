import { Page } from "playwright";
import PlaywrighWebElement from "./PlaywrightWebElement";
import WdioWebElement from "./WdioWebElement";
import IWebElement from "./IWebElement";

export default class WebELementUtils {

    static findElement(locator: string, page?: Page): IWebElement {
        if (page !== undefined) {
            return new PlaywrighWebElement(page, locator);
        } else {
            return new WdioWebElement(locator)
        }
    }
}
