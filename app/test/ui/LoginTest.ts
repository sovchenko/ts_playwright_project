import { BasePage } from "../../ui/pages/BasePage";
import { Browser, Page } from 'playwright';
import { BrowserFactory } from "../../ui/utils/BrowserFactory";
import { expect } from "chai";

let browser: Browser;
let page: Page;

beforeEach(async () => {
    browser = await BrowserFactory.getBrowser();
    page = await BrowserFactory.getPage(browser);
})

afterEach(async () => {
    await browser.close();
})

describe('User can ', () => {
    it('open gmail home page', async () => {

        const homePage = new BasePage();
        await homePage.openHomePage(page);
        
        expect(page.url()).to.be.equal("https://www.google.com/intl/uk/gmail/about/", 'Incorrect url of the page');
    })
})
