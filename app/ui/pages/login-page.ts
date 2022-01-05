import { Page } from "playwright";
import Header from "../elements/header";

export default class LoginPage {
    readonly page: Page;
    readonly header: Header;

    constructor(page: Page) {

    }
}