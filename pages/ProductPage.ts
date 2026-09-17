import { Page } from "@playwright/test";

export class ProductPage {

    constructor(private page: Page) {}

    private backpackBtn = "#add-to-cart-sauce-labs-backpack";
    private removeBackpackBtn = "#remove-sauce-labs-backpack";
    private cartBadge = ".shopping_cart_badge";

    async addBackpackToCart() {
        await this.page.locator(this.backpackBtn).click();
    }

    async getCartCount() {
        return await this.page.locator(this.cartBadge).textContent();
    }

    async removeBackpackFromCart() {
        await this.page.locator(this.removeBackpackBtn).click();
    }

    async isCartBadgeVisible() {
        return await this.page
            .locator(this.cartBadge)
            .isVisible()
            .catch(() => false);
    }
}