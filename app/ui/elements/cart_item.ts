import { Page } from "playwright";

export default class CartItem {
    readonly page: Page;
    readonly price: string;
    readonly title: string;

    constructor(title: string, price: string) {
        this.title = title;
        this.price = price;
    }
}