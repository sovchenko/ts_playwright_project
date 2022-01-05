import { expect } from "chai";
import HomePage from '../../app/ui/pages/home-page'
import { page } from './hooks';

describe('User can', () => {
    it('add item to the cart', async () => {
        let homePage = new HomePage(page);
        await homePage.openHomePage();
        let searchResultPage = await homePage.header.searchForItem("Iphone 13 Pro Max");
        let itemTile = await searchResultPage.getItemTileByIndex(1);
        await itemTile.addItemToCart();

        expect(await itemTile.isItemAddedToTheCart(), "'Cart icon' on the item tile should be changed to the added state").to.be.true;

        let shoppingCartItemsAmount = await homePage.header.getShoppingCartItemsAmount();

        expect(shoppingCartItemsAmount.trim(), "Items amount should be equal to 1 on the header panel").to.be.equal("1");
        
        let cartModal = await searchResultPage.header.openCartModal();
        let cartItemsAmount = await cartModal.getCartItemsAmount();

        expect(cartItemsAmount, "Amount of the items on the cart modal should be equal to 1").to.be.equal(1);
    })
})