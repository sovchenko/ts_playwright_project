import { chromium, firefox, Page, webkit } from 'playwright'
import { Browser } from 'playwright'
import BrowserFactory from './browser-factory'
import { BROWSER, BASE_URL } from '../../config/base-config'

export default class PlaywrightBrowserFactory implements BrowserFactory {

    async getBrowser(): Promise<Browser> {
        const browser = { chromium, firefox, webkit }[BROWSER];

        return browser.launch({
            headless: false,
            timeout: 10000
        });
    }

    async getPage(browser: Browser): Promise<Page> {
        return browser.newPage({
            //screen resolution for the browser window
            viewport: {
                width: 1920,
                height: 1080
            },
            //todo pass as ENV variable in future, create file with env variables instead of passing to the command line
            baseURL: BASE_URL,
            ignoreHTTPSErrors: true,
            recordVideo: {
                dir: "./video-output",
                size: {
                    width: 1920,
                    height: 1080
                }
            }
        })
    }
}