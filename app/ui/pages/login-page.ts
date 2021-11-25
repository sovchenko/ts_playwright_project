import BasePage from "./base-page";

export default class LoginPage extends BasePage {

    constructor() {
        super();
    }

    async enterEmail(email: string): Promise<void> {
        const emailField = await this.findElement("//input[@type='email']");
        emailField.waitForVisible();
        await emailField.setValue(email);
    }

    //should return new page where user can restore email
    async pressForgetEmailButton() {
        const forgetEmailLink = await this.findElement("//input[@type='email']/ancestor::div[@jsslot]//button");
        forgetEmailLink.waitForVisible();
        await forgetEmailLink.click()
        await this.page.waitForLoadState("networkidle")
    }

    async pressNextButton() {
        const nextButton = await this.findElement("//div[@id='identifierNext']//button");
        nextButton.waitForVisible();
        await nextButton.click();
        await this.page.waitForLoadState("networkidle")
    }

    async getErrorMessages(): Promise<string> {
        const errorMessageElement = await this.findElement("//input[@type='email']//ancestor::div//descendant::div[@aria-live='assertive']//div");
        errorMessageElement.waitForVisible();
        const errorMessageText = await errorMessageElement.getText();

        if (errorMessageText == null) {
            throw new Error(`Specified element doesn't contain the text`)
        }

        return errorMessageText;
    }
}