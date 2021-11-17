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
}
