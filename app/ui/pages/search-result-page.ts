import { Page } from "playwright";
import { waitFor } from "../../../core/ui/utils/web-element-util";
import ItemTile from "../elements/item-tile";
import BasePage from "./base-page";


export default class SearchResultPage extends BasePage {

    constructor(){
        super();
    }

    private genericItemTileLocator = "//li[contains(@class, 'catalog-grid__cell')]";

    async getItemTileByIndex(index: number) {
        let itemTileLocator = `${this.genericItemTileLocator}[${index}]`;
        await waitFor(this.page, itemTileLocator, "visible");

        return new ItemTile(this.page, itemTileLocator);
    }
}