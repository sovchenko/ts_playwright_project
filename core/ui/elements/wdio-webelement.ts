import IWebElement from "./i-webelement";

export default class WdioWebElement implements IWebElement {

    //todo: should be implemented in the future
    private readonly locator: string;

    constructor(locator: string) {
        this.locator = locator;
    }
   
    click(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    setValue(value: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    hover(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getText(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    check(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    doubleClick(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getAttribute(attributeName: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    isChecked(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    isEnabled(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    isVisible(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    waitForVisible(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    waitForExisting(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    waitForNotExisting(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    waitForHidden(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    

    // waitForSelector(selector: string): Promise<void> {
    //     throw new Error("Method not implemented.");
    // }
}