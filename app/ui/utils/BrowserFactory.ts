import { chromium, firefox, webkit } from 'playwright'
import { Browser } from 'playwright'


export class BrowserFactory {

    static async getBrowser(): Promise<Browser> {
        //get browser name from the passed env variable
        //if undefined or null use 'chromium'
        const browserName = process.env.BROWSER ?? 'chromium';

        //if BROWSER env variable is set to anything other than chromium, firefox, webkit - use chromiutm as default
        const browser = {chromium, firefox, webkit }[browserName] ?? chromium;
    
        return browser.launch({
            headless: false,
            timeout: 10000
        });
    }

    static async getPage(browser: Browser){
        return browser.newPage({
            //screen resolution for the browser window
            viewport: {
                width: 1920,
                height: 1080
            },
            //todo pass as ENV variable in future, create file with env variables instead of passing to the command line
            baseURL: "https://www.google.com/intl/uk/gmail/about",
            ignoreHTTPSErrors: true,
            recordVideo: {
                dir: "./video-output",
                size:{
                    width: 1920,
                    height: 1080
                }
            }
        })
    }
}