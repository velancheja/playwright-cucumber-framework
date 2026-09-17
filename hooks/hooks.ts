import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  Status
} from "@cucumber/cucumber";

import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page
} from "@playwright/test";

import dotenv from "dotenv";

dotenv.config();

setDefaultTimeout(60000);

export let browser: Browser;
export let context: BrowserContext;
export let page: Page;

BeforeAll(async () => {

  const browserType = process.env.BROWSER || "chromium";

  switch (browserType.toLowerCase()) {

    case "firefox":

      browser = await firefox.launch({
        headless: process.env.HEADLESS === "true"
      });

      break;

    case "webkit":

      browser = await webkit.launch({
        headless: process.env.HEADLESS === "true"
      });

      break;

    default:

      browser = await chromium.launch({
        headless: process.env.HEADLESS === "true"
      });
  }

  console.log(`Running Browser: ${browserType}`);

});

Before(async () => {

  context = await browser.newContext();

  page = await context.newPage();

});

After(async function (scenario) {

  console.log("Scenario Status:", scenario.result?.status);

  try {

    if (scenario.result?.status === Status.FAILED) {

      const fileName = `failed-${Date.now()}.png`;

      await page.screenshot({
        path: `reports/screenshots/${fileName}`,
        fullPage: true
      });

      console.log(`Screenshot saved: ${fileName}`);
    }

  } catch (error) {

    console.log("Screenshot Error:", error);

  }

  if (context) {
    await context.close();
  }

});

AfterAll(async () => {

  if (browser) {
    await browser.close();
  }

});