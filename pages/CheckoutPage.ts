import { Page } from "@playwright/test";

export class CheckoutPage {

    constructor(private page: Page) {}

    private firstNameTxt = "#first-name";
    private lastNameTxt = "#last-name";
    private postalCodeTxt = "#postal-code";
    private continueBtn = "#continue";

    async enterFirstName(firstName: string) {

        await this.page
            .locator(this.firstNameTxt)
            .fill(firstName);

    }

    async enterLastName(lastName: string) {

        await this.page
            .locator(this.lastNameTxt)
            .fill(lastName);

    }

    async enterPostalCode(postalCode: string) {

        await this.page
            .locator(this.postalCodeTxt)
            .fill(postalCode);

    }

    async clickContinueButton() {

        await this.page
            .locator(this.continueBtn)
            .click();

    }

}