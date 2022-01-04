import { Page } from "playwright";
import { findElement, waitFor } from "../../../core/ui/utils/web-element-util";
// import ItemCartPage from "../pages/item-cart-page";
// import SideBar from "../pages/modals/side-bar";
// import ProfilePage from "../pages/profile-page";
import SearchResultPage from "../pages/search-result-page";

export default class Header {

    private page: Page;
    private itemCartButtonLocator = "//li[@class='header-actions__item header-actions__item--cart']//button";
    private profileButtonLocator = "//li[@class='header-actions__item header-actions__item--user']//button";
    private searchFieldLocator = "//input[contains(@class, 'search-form__input')]";
    private searchSubmitButtonLocator = "//button[contains(@class, 'search-form__submit')]";
    private burgerMenuButtonLocator = "//rz-mobile-user-menu/button";

    constructor(page: Page){
        this.page = page;
    }

    // async openBurgerMenu() {
    //     await waitFor(this.page, this.burgerMenuButtonLocator, "visible");
    //     let burgerMenuElement = await findElement(this.burgerMenuButtonLocator, this.page);
    //     await burgerMenuElement.click();
    //     return new SideBar(this.page);
    // }

    async searchForItem(itemName: string) {
        await waitFor(this.page, this.searchFieldLocator, "visible");
        let searchBarField = await findElement(this.searchFieldLocator, this.page);
        let searchSubmitButton = await findElement(this.searchSubmitButtonLocator, this.page);
        await searchBarField.setValue(itemName);
        await searchSubmitButton.click();

        return new SearchResultPage(this.page);
    }

    async changeLanguage(language: "UA" | "RU"){

    }

    // async openProfilePage() {
    //     await waitFor(this.page, this.profileButtonLocator, "visible")
    //     let profileButton = await findElement(this.profileButtonLocator, this.page);
    //     await profileButton.click();

    //     return new ProfilePage();
    // }

    // async openCartPage(){
    //     await waitFor(this.page, this.itemCartButtonLocator, "visible");
    //     let itemCartButton = await findElement(this.itemCartButtonLocator, this.page);
    //     await itemCartButton.click();

    //     return new ItemCartPage();
    // }

}