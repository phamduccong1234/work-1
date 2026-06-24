import { expect, test } from "@playwright/test";

const rightAccount = {
  username: "betterbytes.academy.admin",
  password: "StrongPass@BetterBytesAcademy",
};

const xpathLocator = {
  loginUrl: "https://pw-practice-dev.playwrightvn.com/wp-login.php",
  usernameInputField: "//input[@id='user_login']",
  passwordInputField: "//input[@id='user_pass']",
  btnLogin: "//input[@id='wp-submit']",
};

const newUser = {
  username: "playwright-congpham",
  email: "phamduccong1234@gmail.com",
  password: "123456",
  firstname: "playwright",
  lastname: "congpham",
  roleEditor: "editor",
  roldSubscriber: "subscriber"
};

const visibleMenusEditor = [
    'Dashboard',
    'Posts',
    'Media',
    'Pages',
    'Comments',
    'Profile',
    'Tools'
];

const hiddenMenusEditor = [
    'Appearance',
    'Uses',
    'Plugins'
];

const visibleMenusSubscriber = [
    'Dashboard',
    'Profile'
];

const hiddenMenusSubscriber = [
    'Appearance',
    'Uses',
    'Plugins',
    'Posts',
    'Media',
    'Pages',
    'Comments',
    'Tools'
];

test.describe("ACCOUNT - Account", async () => {
  test.beforeEach(async ({ page }) => {
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
    await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
      await page.locator("//a[text()='Log Out']").click();

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(rightAccount.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(rightAccount.password);

      await page.locator(xpathLocator.btnLogin).click();

      await page.locator("//li[@id='menu-users']").click();
      await page.locator("//input[@id='user-search-input']").fill(newUser.lastname);
      await page.locator("//input[@id='search-submit']").click();
      await page.locator(`//a[text()='${newUser.username}']`).hover();
      await page.locator(`//a[text()='${newUser.username}']/parent::strong/following-sibling::div/descendant::a[text()='Delete']`).click();
      let deleteContent = await page.locator("//input[@id='delete_option0']");
      if(await deleteContent.isVisible() === true){
        await deleteContent.click();
      }
      await page.locator("//input[@id='submit']").click();
      await expect (page.locator("//div[@id='message']/child::p")).toHaveText("User deleted.")
      await page.locator("//input[@id='user-search-input']").fill(newUser.lastname);
      await page.locator("//input[@id='search-submit']").click();
      let messageDeleteUser = await page.locator("//tbody[@id='the-list']/descendant::td");
      await expect(messageDeleteUser).toHaveText(/No users found./);
      await page.close();
  });

  test("ACC_001 - Create account with editor permission", async ({ page }) => {
    await test.step("Go to User Management page", async () => {
      await page.locator("//li[@id='menu-users']").click();
      await expect(
        page.locator("//div[@id='wpbody-content']/descendant::h1"),
      ).toBeVisible();
      let enableBtnAddUser = await page
        .locator("//div[@id='wpbody-content']/descendant::a[text()='Add User']")
        .isEnabled();
      await expect(enableBtnAddUser).toEqual(true);
    });

    await test.step("Add new user", async () => {
      await page
        .locator("//div[@id='wpbody-content']/descendant::a[text()='Add User']")
        .click();
      await page.locator("//input[@id='user_login']").fill(newUser.username);
      await page.locator("//input[@id='pass1']").fill(newUser.password);
      await page.locator("//input[@id='email']").fill(newUser.email);
      await page.locator("//input[@id='first_name']").fill(newUser.firstname);
      await page.locator("//input[@id='last_name']").fill(newUser.lastname);
      await page.locator("//select[@id='role']").selectOption(newUser.roleEditor);
      await page.locator("//input[@name='pw_weak']").check();
      await page.locator("//input[@id='createusersub']").click();

      let messageAddNewUser = await page.locator("//div[@id='message']");
      await expect(messageAddNewUser).toHaveText(/New user created./);
    });

    await test.step('Logout and login with new user', async () => {
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
      await page.locator("//a[text()='Log Out']").click();

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(newUser.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(newUser.password);

      await page.locator(xpathLocator.btnLogin).click();
      for (const visiblemenu of visibleMenusEditor) {
        await expect (page.locator(`//div[normalize-space(text())='${visiblemenu}']`)).toBeVisible();
      };
      for (const hiddenmenu of hiddenMenusEditor) {
        await expect (page.locator(`//div[normalize-space(text())='${hiddenmenu}']`)).toBeHidden();
      };
    });
  });

  test("ACC_002 - Create account with subscriber permission", async ({ page }) => {
    await test.step("Go to User Management page", async () => {
      await page.locator("//li[@id='menu-users']").click();
      await expect(
        page.locator("//div[@id='wpbody-content']/descendant::h1"),
      ).toBeVisible();
      let enableBtnAddUser = await page
        .locator("//div[@id='wpbody-content']/descendant::a[text()='Add User']")
        .isEnabled();
      await expect(enableBtnAddUser).toEqual(true);
    });

    await test.step("Add new user", async () => {
      await page
        .locator("//div[@id='wpbody-content']/descendant::a[text()='Add User']")
        .click();
      await page.locator("//input[@id='user_login']").fill(newUser.username);
      await page.locator("//input[@id='pass1']").fill(newUser.password);
      await page.locator("//input[@id='email']").fill(newUser.email);
      await page.locator("//input[@id='first_name']").fill(newUser.firstname);
      await page.locator("//input[@id='last_name']").fill(newUser.lastname);
      await page.locator("//select[@id='role']").selectOption(newUser.roldSubscriber);
      await page.locator("//input[@name='pw_weak']").check();
      await page.locator("//input[@id='createusersub']").click();

      let messageAddNewUser = await page.locator("//div[@id='message']");
      await expect(messageAddNewUser).toHaveText(/New user created./);
    });

    await test.step('Logout and login with new user', async () => {
      await page.locator("//li[@id='wp-admin-bar-my-account']").hover();
      await page.locator("//a[text()='Log Out']").click();

      await page
        .locator(xpathLocator.usernameInputField)
        .fill(newUser.username);
      await page
        .locator(xpathLocator.passwordInputField)
        .fill(newUser.password);

      await page.locator(xpathLocator.btnLogin).click();
      for (const visiblemenu of visibleMenusSubscriber) {
        await expect (page.locator(`//div[normalize-space(text())='${visiblemenu}']`)).toBeVisible();
      };
      for (const hiddenmenu of hiddenMenusSubscriber) {
        await expect (page.locator(`//div[normalize-space(text())='${hiddenmenu}']`)).toBeHidden();
      };
    });
  });
});
