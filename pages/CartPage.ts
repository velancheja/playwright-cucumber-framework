import { Page } from "@playwright/test";

export class CartPage {

    constructor(private page: Page) {}

    private cartIcon = ".shopping_cart_link";
    private checkoutBtn = "#checkout";

    async clickCartIcon() {

        await this.page
            .locator(this.cartIcon)
            .click();
    }

    async getProductName() {

        return await this.page
            .locator(".inventory_item_name")
            .textContent();
    }

    async clickCheckoutButton() {

        await this.page
            .locator(this.checkoutBtn)
            .click();
    }
}