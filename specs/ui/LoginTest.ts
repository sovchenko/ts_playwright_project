import { expect } from "chai";
import HomePage from "../../app/ui/pages/HomePage";

describe('User can ', () => {

    it('see error message if invalid email was entered 1', async () => {
        const invalidEmail = "inv@"

        const homePage = new HomePage();
        await homePage.openHomePage();
        const loginPage = await homePage.openLoginPage();
        await loginPage.enterEmail(invalidEmail);
        await loginPage.pressNextButton();
        const actualErrorMessage = await loginPage.getErrorMessages();

        expect(actualErrorMessage).to.be.equal("Введіть дійсні електронну адресу або номер телефону!!!");
    })
})
