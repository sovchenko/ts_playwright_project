import { expect } from "chai";
import HomePage from '../../app/ui/pages/home-page'

describe('User can', () => {
    it('add item to the cart', async () => {
        let itemName = "Iphone 13 Pro Max";
        let homePage = new HomePage();
        await homePage.openHomePage();
        let searchResultPage = await homePage.header.searchForItem(itemName);
        let itemTile = await searchResultPage.getItemTileByIndex(1);
        await itemTile.addItemToCart();
        expect(await itemTile.isItemAddedToTheCart(), "Item should be present in the cart").to.be.true
    })
})