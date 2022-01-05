import { Page } from "playwright";
import CartItem from "../../elements/cart_item";
import Header from "../../elements/header";

export default class ItemCartModal {

    readonly page: Page;
    readonly header: Header;
    private cartItemSelector = "li.cart-list__item";

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(this.page);
    }

    async getCartItems() {
        this.page.waitForLoadState("networkidle");

        let cartItemList: Array<CartItem> = new Array<CartItem>()
        let cartItemContainers = await this.page.$$(this.cartItemSelector);

        for (let element of cartItemContainers) {
            const cartItemTitleElement = await element.$("a.cart-product__title");
            const cartItemPriceElement = await element.$("p.cart-product__price");

            const cartItemTitle = await cartItemTitleElement.textContent();
            const cartItemPrice = await cartItemPriceElement.textContent();

            cartItemList.push(new CartItem(cartItemTitle, cartItemPrice));
        }

        return cartItemList;
    }

    async getCartItemsAmount() {
        let cartItems = await this.page.$$(this.cartItemSelector);

        return cartItems.length;
    }
}