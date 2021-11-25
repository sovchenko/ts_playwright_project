import BasePage from "./base-page";
import LoginPage from "./login-page";


export default class HomePage extends BasePage {

    constructor() {
        super();
    }

    async openLoginPage(): Promise<LoginPage> {
        const loginButton = await this.findElement("//a[@data-action='sign in']");
        await loginButton.waitForVisible();
        await loginButton.click();

        await this.page.waitForLoadState("networkidle");

        return new LoginPage();
    }

}