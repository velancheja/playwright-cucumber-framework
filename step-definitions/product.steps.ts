import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";
import { ProductPage } from "../pages/ProductPage";

let productPage: ProductPage;

When("User adds Backpack to cart", async () => {

    productPage = new ProductPage(page);

    await productPage.addBackpackToCart();

});

Then("Cart count should be {string}", async (count) => {

    const cartCount = await productPage.getCartCount();

    expect(cartCount).toBe(count);

});
When("User removes Backpack from cart", async () => {

    await productPage.removeBackpackFromCart();

});

Then("Cart badge should not be visible", async () => {

    const cartBadgeVisible =
        await productPage.isCartBadgeVisible();

    expect(cartBadgeVisible).toBeFalsy();

});