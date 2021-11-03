import { Browser, Page } from "playwright";

export interface BrowserFactory {
    getBrowser(): Promise<Browser>;
    getPage?(browser: any): Promise<Page>;
}