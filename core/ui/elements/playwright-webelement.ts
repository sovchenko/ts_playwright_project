import { Page } from "playwright";
import IWebElement from "./i-webelement";

export default class PlaywrighWebElement implements IWebElement {
    private readonly page: Page;
    private readonly locator: string;

    constructor(page: Page, locator: string) {
        this.page = page;
        this.locator = locator;
    }

    async click(): Promise<void> {
        await this.page.locator(this.locator).click();
    }

    async setValue(value: string): Promise<void> {
        await this.page.locator(this.locator).fill("");
        await this.page.locator(this.locator).fill(value);
    }

    async hover(): Promise<void> {
        await this.page.locator(this.locator).hover();
    }

    async getText(): Promise<string> {
        const value = await this.page.locator(this.locator).textContent();
        if (!value) {
            throw new Error(`${this.locator} element doesn't have text`);
        }
        return value;
    }

    async check(): Promise<void> {
        await this.page.locator(this.locator).check();
    }

    async doubleClick(): Promise<void> {
        await this.page.locator(this.locator).dblclick();
    }

    async getAttribute(attributeName: string): Promise<string> {
        const attributeValue = await this.page.locator(this.locator).getAttribute(attributeName);

        if (!attributeValue) {
            throw new Error(`${this.locator} element doesn't have ${attributeName} name.`);
        }

        return attributeValue;
    }

    async isChecked(): Promise<boolean> {
        return await this.page.locator(this.locator).isChecked();
    }

    async isEnabled(): Promise<boolean> {
        return await this.page.locator(this.locator).isEnabled();
    }

    async isVisible(): Promise<boolean> {
        return await this.page.locator(this.locator).isVisible();
    }

    async waitForVisible(): Promise<void> {
        await this.page.waitForSelector(this.locator, {
            state: "visible",
            timeout: 10000
        });
    }

    async waitForExisting(): Promise<void> {
        await this.page.waitForSelector(this.locator, {
            state: "attached",
            timeout: 10000
        });
    }

    async waitForNotExisting(): Promise<void> {
        await this.page.waitForSelector(this.locator, {
            state: "detached",
            timeout: 10000
        });
    }

    async waitForHidden(): Promise<void> {
        await this.page.waitForSelector(this.locator, {
            state: "hidden",
            timeout: 10000
        });
    }

    // async waitForSelector(selector: string){
    //     let element = await (await (await this.page.$(this.locator)).evaluateHandle;
    //     await element.waitForSelector(selector, {
    //         state: "attached",
    //         timeout: 4000
    //     });
    // }
}