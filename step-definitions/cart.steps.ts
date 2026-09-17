import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";
import { CartPage } from "../pages/CartPage";

let cartPage: CartPage;

When("User clicks Cart icon", async () => {

    cartPage = new CartPage(page);

    await cartPage.clickCartIcon();
});

Then("User should see {string} in cart", async (productName) => {

    const actualProduct =
        await cartPage.getProductName();

    expect(actualProduct).toBe(productName);
});