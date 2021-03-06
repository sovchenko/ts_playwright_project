import { Browser, Page } from "playwright"
import BrowserFactory from "../../core/ui/browser-factory";
import PlaywrightBrowserFactory from "../../core/ui/playwright-browser-factory";

export let page: Page;
export let browser: Browser;
export let browserFactory: BrowserFactory;

exports.mochaHooks = {
    async beforeEach() {
        browserFactory = new PlaywrightBrowserFactory();
        browser = await browserFactory.getBrowser();

        if (browserFactory.getPage !== undefined) {
            page = await browserFactory.getPage(browser)
        } else {
            page = await browser.newPage()
        }
    },

    async afterEach() {
        await browser.close();
    }
}
