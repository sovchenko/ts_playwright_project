import { Browser, Page } from "playwright";

export default interface BrowserFactory {
    getBrowser(): Promise<Browser>;
    getPage?(browser: any): Promise<Page>;
}