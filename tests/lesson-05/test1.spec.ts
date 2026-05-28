import { test } from '@playwright/test';

test('Bài học 1 test', async ({ page}) => {
    await test.step("Go the home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Access Bai 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Input all fields user information", async () => {
        await page.locator("//input[@id='username']").fill("cong");
        await page.locator("//input[@id='email']").fill("phamduccong1234@gmail.com");
        await page.locator("//input[@id='male']").click();
        await page.locator("//input[@id='traveling']").click();
        await page.locator("//input[@id='cooking']").click();
        await page.locator("//select[@id='interests']").selectOption("sports");
        await page.locator("//select[@id='country']").selectOption("uk");
        await page.locator("//input[@id='dob']").pressSequentially("09121998", {delay: 100});
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/data-test.txt");
        await page.locator("//textarea[@id='bio']").fill("Cong - 28 years old - Test");
        // rate us
        // favorite color
        await page.locator("//input[@id='newsletter']").click();
        await page.locator("//span[@class='slider round']").click();
        // star rating
    });

    await test.step("Click on button register", async () =>{
        await page.locator("//button[@type='submit']").click();
    });
});