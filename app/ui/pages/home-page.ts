import IWebElement from "../../../core/ui/elements/i-webelement";
import WebELementUtils from "../../../core/ui/elements/web-element-util";
import BasePage from "./base-page";
import LoginPage from "./login-page";


export default class HomePage extends BasePage {
    loginButton: IWebElement;

    constructor() {
        super();
        this.loginButton = WebELementUtils.findElement("//a[@data-action='sign in']", this.page);
    }

    async openLoginPage(): Promise<LoginPage> {
        await this.loginButton.click();
        await this.page?.waitForLoadState("networkidle");

        return new LoginPage();
    }

}