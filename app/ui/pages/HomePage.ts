import { Page } from "playwright";
import WebELementUtils from "../../../core/ui/elements/WebElementUtil";
import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

export default class HomePage extends BasePage {
    page: Page;
    loginButton: IWebElement;

    constructor(page: Page) {
        super();
        this.page = page;
        this.loginButton = WebELementUtils.findElement("//a[@data-action='sign in']", page);
    }

    async openLoginPage(): Promise<LoginPage> {
        await this.loginButton.click();
        await this.page?.waitForLoadState("networkidle");

        return new LoginPage(this.page);
    }

}