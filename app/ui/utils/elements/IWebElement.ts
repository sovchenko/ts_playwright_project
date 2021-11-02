interface IWebElement{
     click(locator: string): Promise<void>;
     setValue(locator: string, value: string): Promise<void>;
     hover(locator: string): Promise<void>;
     getText(locator: string): Promise<string>;
     check(locator: string): Promise<void>;
     doubleClick(locator: string): Promise<void>;
     getAttribute(locator: string, attributeName: string): Promise<string>;
     isChecked(locator: string): Promise<boolean>;
     isEnabled(locator: string): Promise<boolean>;
     isVisible(locator: string): Promise<boolean>;
}
