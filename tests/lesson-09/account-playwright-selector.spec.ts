import { expect, test } from "@playwright/test";

const rightAccount = {
  username: "betterbytes.academy.admin",
  password: "StrongPass@BetterBytesAcademy",
};

const url = {
  loginUrl: "https://pw-practice-dev.playwrightvn.com/wp-login.php",
};

const newUser = {
  username: "playwright-congpham",
  email: "phamduccong1234@gmail.com",
  password: "123456",
  firstname: "playwright",
  lastname: "congpham",
  roleEditor: "editor",
  roldSubscriber: "subscriber",
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
    await test.step("Access into login page and login", async () => {
      await page.goto(url.loginUrl);

      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(rightAccount.username);
      await page
        .getByRole("textbox", { name: "Password" })
        .fill(rightAccount.password);

      await page.getByRole("button", { name: "Log In" }).click();
    });
  });

  test.afterEach(async ({ page }) => {
    await page.getByRole("menuitem", { name: "Howdy," }).hover();
    await page.getByRole("menuitem", { name: "Log Out" }).click();

    await page
      .getByRole("textbox", { name: "Username or Email Address" })
      .fill(rightAccount.username);
    await page
      .getByRole("textbox", { name: "Password" })
      .fill(rightAccount.password);

    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByText("Users", { exact: true }).click();
    await page
      .getByRole("searchbox", { name: "Search Users:" })
      .fill(newUser.lastname);
    await page.getByRole("button", { name: "Search Users" }).click();
    await page.getByRole("link", { name: `${newUser.username}` }).hover();
    await page
      .locator(`#${newUser.username}`)
      .getByRole("link", { name: "Delete" })
      .click();
    let deleteContent = await page.locator("//input[@id='delete_option0']");
    if ((await deleteContent.isVisible()) === true) {
      await deleteContent.click();
    }
    await page.getByRole("button", { name: "Confirm Deletion" }).click();
    const userDeletedText = page.getByText("User deleted.", { exact: true });
    await expect(userDeletedText).toBeVisible();
    await page
      .getByRole("searchbox", { name: "Search Users:" })
      .fill(newUser.lastname);
    await page.getByRole("button", { name: "Search Users" }).click();
    const noUsersFoundText = page.getByText("No users found.", { exact: true });
    await expect(noUsersFoundText).toHaveText(/No users found./);
    await page.close();
  });

  test("ACC_001 - Create account with editor permission", async ({ page }) => {
    await test.step("Go to User Management page", async () => {
      await page.getByText("Users", { exact: true }).click();
      await expect(
        page.getByRole("heading", { name: "Users", level: 1 }),
      ).toBeVisible();
      let enableBtnAddUser = page
        .locator("#wpbody-content")
        .getByRole("link", { name: "Add User" })
        .isEnabled();
      await expect(enableBtnAddUser).toEqual(true);
    });

    await test.step("Add new user", async () => {
      await page.getByRole("link", { name: "Add User" }).click();
      await page
        .getByRole("textbox", { name: "Username (required)" })
        .fill(newUser.username);
      await page
        .getByRole("textbox", { name: "Password				(required)" })
        .fill(newUser.password);
      await page
        .getByRole("textbox", { name: "Email (required)" })
        .fill(newUser.email);
      await page
        .getByRole("textbox", { name: "First Name" })
        .fill(newUser.firstname);
      await page
        .getByRole("textbox", { name: "Last Name" })
        .fill(newUser.lastname);
      await page
        .getByRole("combobox", { name: "Role" })
        .selectOption(newUser.roleEditor);
      await page
        .getByRole("checkbox", {
          name: "Confirm use of weak password",
          checked: false,
        })
        .check();
      await page.getByRole("button", { name: "Add User" }).click();

      let messageAddNewUser = page.getByText("New user created.", {
        exact: true,
      });
      await expect(messageAddNewUser).toBeVisible();
    });

    await test.step("Logout and login with new user", async () => {
      await page.getByRole("menuitem", { name: "Howdy," }).hover();
      await page.getByRole("menuitem", { name: "Log Out" }).click();

      await page
        .getByRole("textbox", { name: "Username or Email Address" })
        .fill(rightAccount.username);
      await page
        .getByRole("textbox", { name: "Password" })
        .fill(rightAccount.password);

      await page.getByRole("button", { name: "Log In" }).click();
      for (const visiblemenu of visibleMenusEditor) {
        await expect(
          page.getByText(`${visiblemenu}`, { exact: true }),
        ).toBeVisible();
      }
      for (const hiddenmenu of hiddenMenusEditor) {
        await expect(
          page.getByText(`${hiddenmenu}`, { exact: true }),
        ).toBeHidden();
      }
    });
  });

  test("ACC_002 - Create account with subscriber permission", async ({
    page,
  }) => {
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
      await page
        .locator("//select[@id='role']")
        .selectOption(newUser.roldSubscriber);
      await page.locator("//input[@name='pw_weak']").check();
      await page.locator("//input[@id='createusersub']").click();

      let messageAddNewUser = await page.locator("//div[@id='message']");
      await expect(messageAddNewUser).toHaveText(/New user created./);
    });

    await test.step("Logout and login with new user", async () => {
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
