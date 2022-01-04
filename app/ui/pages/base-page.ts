import { Page } from 'playwright';
import { page } from '../../../specs/ui/hooks';
import Header from '../elements/header';

export default class BasePage {
    protected readonly page: Page;
    protected readonly header: Header;

    constructor() {
        this.page = page;
        this.header = new Header(this.page);
    }
 
    async getHeader(){
        return this.header;
    }

    async openHomePage(): Promise<BasePage> {
        await this.page.goto('');
        await this.page.waitForLoadState("networkidle");
        return this;
    }
}