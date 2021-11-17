import IWebElement from "./IWebElement";

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

}