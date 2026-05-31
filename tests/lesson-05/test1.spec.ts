import { test } from "@playwright/test";

test("Bài học 1: Register Page", async ({ page }) => {
  await test.step("Go the home page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Access into Bài học 1", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  await test.step("Input all fields user information", async () => {
    await page.locator("//input[@id='username']").fill("cong");
    await page
      .locator("//input[@id='email']")
      .fill("phamduccong1234@gmail.com");
    await page.locator("//input[@id='male']").click();
    await page.locator("//input[@id='traveling']").click();
    await page.locator("//input[@id='cooking']").click();
    await page.locator("//select[@id='interests']").selectOption("sports");
    await page.locator("//select[@id='country']").selectOption("uk");
    await page
      .locator("//input[@id='dob']")
      .pressSequentially("09121998", { delay: 100 });
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/data-test/data-test.txt");
    await page
      .locator("//textarea[@id='bio']")
      .fill("Cong - 28 years old - Test");
    // rate us
    const rating = await page.locator("//input[@id='rating']").boundingBox();
    if (rating) {
      await page.mouse.click(
        rating.x + rating.width * 0.25,
        rating.y + rating.height * 0.5,
      );
    }
    // favorite color
    await page.locator("//input[@id='favcolor']").fill("#744949");
    await page.locator("//input[@id='newsletter']").click();
    await page.locator("//span[@class='slider round']").click();
    // star rating
    const star = await page.locator("//div[@id='starRating']").boundingBox();
    if (star) {
      await page.mouse.click(
        star.x + star.width * 0.8,
        star.y + star.height * 0.5,
      );
    }
  });

  await test.step("Click on button register", async () => {
    await page.locator("//button[@type='submit']").click();
  });
});
