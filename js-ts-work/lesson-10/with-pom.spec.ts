import { test } from "@playwright/test";
import { MyLoginPage } from "../../pom/pom";

test("Login success", async ({ page }) => {
  const loginPage = new MyLoginPage(page);

  await test.step("Go to login page", async () => {
    await loginPage.page.goto(
      "https://pw-practice-dev.playwrightvn.com/wp-login.php",
    );
  });

  await test.step("Fill username", async () => {
    await loginPage.fillUsername("betterbytes.academy.admin");
  });

  await test.step("Fill password", async () => {
    await loginPage.fillPassword("StrongPass@BetterBytesAcademy");
  });

  await test.step("Click Login button", async () => {
    await loginPage.clickLoginBtn();
  });
});

test("Login fail", async ({ page }) => {
  const loginPage = new MyLoginPage(page);

  await test.step("Go to login page", async () => {
    await loginPage.page.goto(
      "https://pw-practice-dev.playwrightvn.com/wp-login.php",
    );
  });

  await test.step("Fill username", async () => {
    await loginPage.fillUsername("betterbytes.academy.admin123");
  });

  await test.step("Fill password", async () => {
    await loginPage.fillPassword("Strongpass@BetterBytesAcademy123");
  });

  await test.step("Click Login button", async () => {
    await loginPage.clickLoginBtn();
  });
});
