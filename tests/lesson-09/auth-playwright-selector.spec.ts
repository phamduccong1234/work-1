import { expect, test } from "@playwright/test";

const rightAccount = {
  username: "betterbytes.academy.admin",
  password: "StrongPass@BetterBytesAcademy",
};

const wrongAccount = {
  username: "betterbytes.academy.admin123",
  password: "StrongPass@BetterBytesAcademy123",
};

const url = {
  loginUrl: "https://pw-practice-dev.playwrightvn.com/wp-login.php",
  dashboardUrl: "https://pw-practice-dev.playwrightvn.com/wp-admin/",
};

test.describe('AUTH - Authentication', async () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Access into login page', async () => {
      await page.goto(url.loginUrl);
    });
  });

  test.afterEach(async ({ context }) => {
    await context.close();
  });

  test('AUTH_001 - Login fail', async ({ page }) => {
    await test.step('Input username, password', async () => {
      await page.getByRole('textbox', { name: 'Username or Email Address' }).fill(wrongAccount.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(wrongAccount.password);
    });

    await test.step('Click Login button and verify', async () => {
      await page.getByRole('button', { name: 'Log In' }).click();
      const errorLoginMessage = page.getByText(`Error: The username ${wrongAccount.username} is not registered on this site. If you are unsure of your username, try your email address instead.`, { exact: true });
      
      await expect(errorLoginMessage).toBeVisible();
    });
  });

  test('AUTH_002 - Login success', async ({ page }) => {
    await test.step('Input username, password', async () => {
      await page.getByRole('textbox', { name: 'Username or Email Address' }).fill(rightAccount.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(rightAccount.password);

      await page.getByRole('button', { name: 'Log In' }).click();
      await expect(page).toHaveURL(url.dashboardUrl);
      await expect(
        page.getByRole('heading', { name: 'Dashboard', level: 1 })
      ).toBeVisible();
    });
  });
});
