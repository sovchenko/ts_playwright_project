import { Page } from 'playwright'
import { page } from '../../../specs/ui/hooks';

export default class BasePage {
    readonly page: Page;

    constructor(){
        this.page = page;
    }

    async openHomePage(): Promise<BasePage> {
        await this.page.goto('');
        await this.page.waitForLoadState("networkidle");
        return this;
    }
}