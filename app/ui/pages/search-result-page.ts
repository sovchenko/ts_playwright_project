import { Page } from "playwright";
import { waitFor } from "../../../core/ui/utils/web-element-util";
import Header from "../elements/header";
import ItemTile from "../elements/item-tile";


export default class SearchResultPage {

    readonly page: Page;
    readonly header: Header;
    private genericItemTileLocator = "//li[contains(@class, 'catalog-grid__cell')]";


    constructor(page: Page) {
        this.page = page;
        this.header = new Header(this.page);
    }

    async getItemTileByIndex(index: number) {
        let itemTileLocator = `${this.genericItemTileLocator}[${index}]`;
        await waitFor(this.page, itemTileLocator, "visible");

        return new ItemTile(this.page, itemTileLocator);
    }
}