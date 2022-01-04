import { Page } from "playwright";
import Header from "../elements/header";

export default class ItemPage {

    readonly page: Page;
    readonly header: Header;

    constructor(page: Page) {   
        this.page = page;
        this.header = new Header(this.page);
    }
}