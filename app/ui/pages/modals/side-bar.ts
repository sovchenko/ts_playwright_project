import { Page } from "playwright";

export default class SideBar {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }
}