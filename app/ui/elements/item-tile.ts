import { Page } from "playwright";
import { findElement, waitFor } from "../../../core/ui/utils/web-element-util";
// import ItemPage from "../pages/item-page";

export default class ItemTile {
    readonly page: Page;
    readonly rootTileElementLocator: string;
    private itemTitleLocator = "//span[@class='goods-tile__title']";
    private itemPriceLocator = "//span[@class='goods-tile__price-value']";
    private itemInnerTileLocator = "//div[contains(@class, 'goods-tile__inner')]";
    private itemReviewsLinkLocator = "//span[@class='goods-tile__reviews-link']";
    private addItemToCartButtonLocator = "//button[contains(@class,'goods-tile__buy-button')]";

    constructor(page: Page, rootItemTileElementLocator: string) {
        this.page = page;
        this.rootTileElementLocator = rootItemTileElementLocator;
    }

    async getItemTitle() {
        await waitFor(this.page, this.itemTitleLocator, "visible");
        let itemTitleElement = await findElement(`${this.rootTileElementLocator}${this.itemTitleLocator}`, this.page);

        return await itemTitleElement.getText();
    }

    async getItemPrice() {
        await waitFor(this.page, this.itemPriceLocator, "visible");
        let itemPriceElement = await findElement(`${this.rootTileElementLocator}${this.itemPriceLocator}`, this.page);

        return await itemPriceElement.getText();
    }

    // async openItemPage() {
    //     await waitFor(this.page, this.itemInnerTileLocator, "visible");
    //     let itemInnerTileLocatorElement = await findElement(`${this.rootTileElementLocator}${this.itemInnerTileLocator}`, this.page);
    //     await itemInnerTileLocatorElement.click();

    //     return new ItemPage();
    // }

    async addItemToCart() {
        await waitFor(this.page, this.addItemToCartButtonLocator, "visible");
        let addItemToCartButton = await findElement(`${this.rootTileElementLocator}${this.addItemToCartButtonLocator}`, this.page);
        await addItemToCartButton.click();
        //TODO: consider replacing method below with appropriate implemntation
        await this.page.waitForSelector("button.buy-button_state_in-cart", {
            state: "attached",
            timeout: 3000
        })
    }

    async isItemAddedToTheCart() {
        await waitFor(this.page, this.addItemToCartButtonLocator, "visible");
        let addItemToCartButton = await findElement(`${this.rootTileElementLocator}${this.addItemToCartButtonLocator}`, this.page);
        let addItemToCartButtonClassAttribute = await addItemToCartButton.getAttribute("class");

        return addItemToCartButtonClassAttribute.includes("buy-button_state_in-cart");
    }

}