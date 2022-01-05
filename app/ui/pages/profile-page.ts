import { Page } from "playwright";

export default class ProfilePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
}
