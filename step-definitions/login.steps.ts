import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginData.json";

let loginPage: LoginPage;

Given("User launches SauceDemo", async () => {

    loginPage = new LoginPage(page);

    await loginPage.navigateToApplication();

});

When("User enters username {string}", async (username) => {

    await loginPage.enterUsername(username);

});

When("User enters password {string}", async (password) => {

    await loginPage.enterPassword(password);

});

When("User clicks login button", async () => {

    await loginPage.clickLoginButton();

});

Then("User should see Products page", async () => {

    await expect(page).toHaveURL(/inventory/);

});

When("User logs in with valid credentials", async () => {

    await loginPage.enterUsername(
        loginData.validUser.username
    );

    await loginPage.enterPassword(
        loginData.validUser.password
    );

    await loginPage.clickLoginButton();

});