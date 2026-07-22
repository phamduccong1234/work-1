import { expect, test } from "@playwright/test";

const rightAccount = {
  username: "betterbytes.academy.admin",
  password: "StrongPass@BetterBytesAcademy",
};

const xpathLocator = {
  loginUrl: "https://pw-practice-dev.playwrightvn.com/wp-login.php",
  usernameInputField: "#user_login",
  passwordInputField: "#user_pass",
  btnLogin: "#wp-submit",
};

const newUser = {
  username: "playwright-congpham",
  email: "phamduccong1234@gmail.com",
  password: "123456",
  firstname: "playwright",
  lastname: "congpham",
  roleEditor: "editor",
  roleSubscriber: "subscriber",
};

const visibleMenusEditor = [
  "Dashboard",
  "Posts",
  "Media",
  "Pages",
  "Comments",
  "Profile",
  "Tools",
];

const hiddenMenusEditor = ["Appearance", "Uses", "Plugins"];

const visibleMenusSubscriber = ["Dashboard", "Profile"];

const hiddenMenusSubscriber = [
  "Appearance",
  "Uses",
  "Plugins",
  "Posts",
  "Media",
  "Pages",
  "Comments",
  "Tools",
];

test.describe("ACCOUNT - Account", async () => {
  test.beforeEach(async ({ page }) => {
    const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
    newUser.username = `playwright-congpham-${uniqueId}`;
    newUser.email = `phamduccong1234-${uniqueId}@gmail.com`;
    newUser.lastname = `congpham-${uniqueId}`;

    await test.step("Access into login page and login", async () => {
      await page.goto(xpathLocator.loginUrl);

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(rightAccount.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(rightAccount.password);

      await page.locator(xpathLocator.btnLogin).click();
    });
  });

  test.afterEach(async ({ page }) => {
    await page.locator("#wp-admin-bar-my-account").hover();
    await page.locator("#wp-admin-bar-logout > a").click();

    await page
      .locator(xpathLocator.usernameInputField)
      .fill(rightAccount.username);
    await page
      .locator(xpathLocator.passwordInputField)
      .fill(rightAccount.password);

    await page.locator(xpathLocator.btnLogin).click();

    await page.locator("#menu-users > a > div.wp-menu-name").click();
    await page.locator("#user-search-input").fill(newUser.lastname);
    await page.locator("#search-submit").click();
    await page.locator(`//a[text()='${newUser.username}']`).hover();
    await page
      .locator(
        `//a[text()='${newUser.username}']/parent::strong/following-sibling::div/descendant::a[text()='Delete']`,
      )
      .click();
    await page.locator("#delete_option0").click();
    await page.locator("#submit").click();
    await expect(page.locator("#message > p")).toHaveText("User deleted.");
    await page.locator("#user-search-input").fill(newUser.lastname);
    await page.locator("#search-submit").click();
    let messageDeleteUser = await page.locator("#the-list > tr > td");
    await expect(messageDeleteUser).toHaveText(/No users found./);
  });

  test("ACC_001 - Create account with editor permission", async ({ page }) => {
    await test.step("Go to User Management page", async () => {
      await page.locator("#menu-users").click();
      await expect(page.locator("#wpbody-content > div.wrap > h1")).toBeVisible();
      await expect(
        page.locator(
          "#wpbody-content > div.wrap > a"
        )
      ).toBeEnabled();
    });

    await test.step("Add new user", async () => {
      await page.locator("#wpbody-content > div.wrap > a").click();
      await page.locator("#user_login").fill(newUser.username);
      await page.locator("#pass1").fill(newUser.password);
      await page.locator("#email").fill(newUser.email);
      await page.locator("#first_name").fill(newUser.firstname);
      await page.locator("#last_name").fill(newUser.lastname);
      await page.locator("#role").selectOption(newUser.roleEditor);
      let passwordWeak = await page.locator(".pw-checkbox");
      if ((await passwordWeak.isVisible()) === true) {
        await passwordWeak.check();
      }
      await page.locator("#createusersub").click();

      let messageAddNewUser = await page.locator("#message");
      await expect(messageAddNewUser).toHaveText(/New user created./);
    });

    await test.step("Logout and login with new user", async () => {
      await page.locator("#wp-admin-bar-my-account").hover();
      await page.locator("#wp-admin-bar-logout > a").click();

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(newUser.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(newUser.password);

      await page.locator(xpathLocator.btnLogin).click();
      for (const visiblemenu of visibleMenusEditor) {
        await expect(
          page.locator(`//div[normalize-space(text())='${visiblemenu}']`),
        ).toBeVisible();
      }
      for (const hiddenmenu of hiddenMenusEditor) {
        await expect(
          page.locator(`//div[normalize-space(text())='${hiddenmenu}']`),
        ).toBeHidden();
      }
    });
  });

  test("ACC_002 - Create account with subscriber permission", async ({
    page,
  }) => {
    await test.step("Go to User Management page", async () => {
      await page.locator("#menu-users").click();
      await expect(page.locator("#wpbody-content > div.wrap > h1")).toBeVisible();
      await expect(
        page.locator(
          "#wpbody-content > div.wrap > a"
        )
      ).toBeEnabled();
    });

    await test.step("Add new user", async () => {
      await page.locator("#wpbody-content > div.wrap > a").click();
      await page.locator("#user_login").fill(newUser.username);
      await page.locator("#pass1").fill(newUser.password);
      await page.locator("#email").fill(newUser.email);
      await page.locator("#first_name").fill(newUser.firstname);
      await page.locator("#last_name").fill(newUser.lastname);
      await page.locator("#role").selectOption(newUser.roleSubscriber);
      let passwordWeak = await page.locator(".pw-checkbox");
      if ((await passwordWeak.isVisible()) === true) {
        await passwordWeak.check();
      }
      await page.locator("#createusersub").click();

      let messageAddNewUser = await page.locator("#message");
      await expect(messageAddNewUser).toHaveText(/New user created./);
    });

    await test.step("Logout and login with new user", async () => {
      await page.locator("#wp-admin-bar-my-account").hover();
      await page.locator("#wp-admin-bar-logout > a").click();

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(newUser.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(newUser.password);

      await page.locator(xpathLocator.btnLogin).click();
      for (const visiblemenu of visibleMenusSubscriber) {
        await expect(
          page.locator(`//div[normalize-space(text())='${visiblemenu}']`),
        ).toBeVisible();
      }
      for (const hiddenmenu of hiddenMenusSubscriber) {
        await expect(
          page.locator(`//div[normalize-space(text())='${hiddenmenu}']`),
        ).toBeHidden();
      }
    });
  });
});
