import { Page } from "@playwright/test";

export class LoginPage {

    constructor(private page: Page) {}

    async navigateToApplication() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async enterUsername(username: string) {
        await this.page.locator("#user-name").fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator("#password").fill(password);
    }

    async clickLoginButton() {
        await this.page.locator("#login-button").click();
    }
}