import { Page } from "playwright";


export class PlaywrighWebElement implements IWebElement {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    async setValue(locator:string, value: string): Promise<void> {
        await this.page.locator(locator).fill("");
        await this.page.locator(locator).fill(value);
    }

    async hover(locator: string): Promise<void> {
        await this.page.locator(locator).hover();
    }

    async getText(locator: string): Promise<string> {
        const value = await this.page.locator(locator).textContent();
        if(!value){
            throw new Error(`${locator} element doesn't have text`)
        }
        return value;
    }

    async check(locator: string): Promise<void> {
        await this.page.locator(locator).check();
    }

    async doubleClick(locator: string): Promise<void> {
        await this.page.locator(locator).dblclick();
    }

    async getAttribute(locator: string, attributeName: string): Promise<string> {
        const attributeValue = await this.page.locator(locator).getAttribute(attributeName);

        if(!attributeValue){
            throw new Error(`${locator} element doesn't have ${attributeName} name.`);
        }

        return attributeValue;
    }

    async isChecked(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isChecked();
    }

    async isEnabled(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isEnabled();
    }

    async isVisible(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isVisible();
    }
}