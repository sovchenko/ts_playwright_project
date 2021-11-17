import IWebElement from "../../../core/ui/elements/IWebElement";
import WebELementUtils from "../../../core/ui/elements/WebElementUtil";
import BasePage from "./BasePage";
import LoginPage from "./LoginPage";


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