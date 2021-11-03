import { Browser, Page } from 'playwright';
import { PlaywrightBrowserFactory } from "../../ui/utils/PlaywrightBrowserFactory";
import { expect } from "chai";
import { BrowserFactory } from "../../ui/utils/IBrowserFactory";
import { HomePage } from "../../ui/pages/HomePage";

let browserFactory: BrowserFactory;
let browser: Browser;
let page: Page;

beforeEach(async () => {
    browserFactory = new PlaywrightBrowserFactory();
    browser = await browserFactory.getBrowser();

    //todo refactor this, don't like it
    if (browserFactory.getPage !== undefined) {
        page = await browserFactory.getPage(browser)
    } else {
        page = await browser.newPage()
    }
})

afterEach(async () => {
    await browser.close();
})

describe('User can ', () => {

    it('see error message if invalid email was entered', async () => {

        const invalidEmail = "inv@"

        const homePage = new HomePage(page);
        await homePage.openHomePage(page);
        const loginPage = await homePage.openLoginPage();
        await loginPage.enterEmail(invalidEmail);
        await loginPage.pressNextButton();
        const actualErrorMessage = await loginPage.getErrorMessages();
        
        expect(actualErrorMessage).to.be.equal("Введіть дійсні електронну адресу або номер телефону");

    })
})
