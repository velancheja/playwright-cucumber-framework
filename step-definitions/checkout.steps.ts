import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import checkoutData from "../test-data/checkoutData.json";

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

When("User clicks Checkout button", async () => {

    cartPage = new CartPage(page);

    await cartPage.clickCheckoutButton();

});

When("User enters checkout information", async () => {

    checkoutPage = new CheckoutPage(page);

    await checkoutPage.enterFirstName(
        checkoutData.customer.firstName
    );

    await checkoutPage.enterLastName(
        checkoutData.customer.lastName
    );

    await checkoutPage.enterPostalCode(
        checkoutData.customer.postalCode
    );

});

When("User clicks Continue button", async () => {

    await checkoutPage.clickContinueButton();

});

Then("User should see Checkout Overview page", async () => {

    await expect(page).toHaveURL(/checkout-step-two/);

});