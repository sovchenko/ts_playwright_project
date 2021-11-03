import { Page } from "playwright";
import { WebELementUtils } from "../utils/elements/WebElementUtil";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    page: Page;
    emailField: IWebElement;
    nextButton: IWebElement;
    forgetEmailLink: IWebElement;
    createNewAccountLink: IWebElement;
    errorMessage: IWebElement;

    constructor(page: Page) {
        super();
        this.page = page;
        this.emailField = WebELementUtils.findElement("//input[@type='email']", this.page);
        this.nextButton = WebELementUtils.findElement("//div[@id='identifierNext']//button", this.page);
        this.forgetEmailLink = WebELementUtils.findElement("//input[@type='email']/ancestor::div[@jsslot]//button", this.page);
        this.createNewAccountLink = WebELementUtils.findElement("//button[@aria-haspopup='menu']", this.page);
        this.errorMessage = WebELementUtils.findElement("//input[@type='email']//ancestor::div//descendant::div[@aria-live='assertive']//div", this.page);
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailField.setValue(email);
    }

    //should return new page where user can restore email
    async pressForgetEmailButton() {
        await this.forgetEmailLink.click();
        await this.page.waitForLoadState("networkidle")
    }

    async pressNextButton() {
        await this.nextButton.click();
        await this.page.waitForLoadState("networkidle")

    }

    async getErrorMessages(): Promise<string> {
        const errorMessage = await this.errorMessage.getText();

        if (errorMessage == null) {
            throw new Error(`Specified element doesn't contain the text`)
        }

        return errorMessage;
    }
}