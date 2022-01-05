import { Page } from "playwright";
import Header from "../elements/header";

export default class HomePage {

    readonly page: Page;
    readonly header: Header;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(this.page);
    }

    async openHomePage() {
        await this.page.goto('');
        await this.page.waitForLoadState("networkidle")

        return this;
    }
}