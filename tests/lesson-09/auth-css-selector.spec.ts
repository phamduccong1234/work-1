import { expect, test } from "@playwright/test";

const rightAccount = {
  username: "betterbytes.academy.admin",
  password: "StrongPass@BetterBytesAcademy",
};

const wrongAccount = {
  username: "betterbytes.academy.admin123",
  password: "StrongPass@BetterBytesAcademy123",
};

const xpathLocator = {
  loginUrl: "https://pw-practice-dev.playwrightvn.com/wp-login.php",
  usernameInputField: "#user_login",
  passwordInputField: "#user_pass",
  btnLogin: "#wp-submit",
  dashboardUrl: "https://pw-practice-dev.playwrightvn.com/wp-admin/",
};

test.describe('AUTH - Authentication', async () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Access into login page', async () => {
      await page.goto(xpathLocator.loginUrl);
    });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('AUTH_001 - Login fail', async ({ page }) => {
    await test.step('Input username, password', async () => {
      await page
        .locator(xpathLocator.usernameInputField)
        .fill(wrongAccount.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(wrongAccount.password);
    });

    await test.step('Click Login button and verify', async () => {
      await page.locator(xpathLocator.btnLogin).click();
      const errorLoginMessage = await page.locator(
        "#login_error > p"
      );

      await expect(errorLoginMessage).toBeVisible();
      await expect(errorLoginMessage).toHaveText(
        "Error: The username betterbytes.academy.admin123 is not registered on this site. If you are unsure of your username, try your email address instead."
      );
    });
  });

  test('AUTH_002 - Login success', async ({ page }) => {
    await test.step('Input username, password', async () => {
      await page
        .locator(xpathLocator.usernameInputField)
        .fill(rightAccount.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(rightAccount.password);

      await page.locator(xpathLocator.btnLogin).click();
      await expect(page).toHaveURL(xpathLocator.dashboardUrl);
      await expect(
        page.locator("#wpbody-content > div.wrap > h1"),
      ).toBeVisible();
    });
  });
});
