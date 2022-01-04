export default interface IWebElement {
     click(): Promise<void>;
     setValue(value: string): Promise<void>;
     hover(): Promise<void>;
     getText(): Promise<string>;
     check(): Promise<void>;
     doubleClick(): Promise<void>;
     getAttribute(attributeName: string): Promise<string>;
     isChecked(): Promise<boolean>;
     isEnabled(): Promise<boolean>;
     isVisible(): Promise<boolean>;
     waitForVisible(): Promise<void>;
     waitForExisting(): Promise<void>;
     waitForNotExisting(): Promise<void>;
     waitForHidden(): Promise<void>;
     // waitForSelector(selector: string): Promise<void>;
}
