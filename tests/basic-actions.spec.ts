import { test } from '@playwright/test';

test('Basic actions', async ({ page}) => {
    await test.step("Navigate to the material website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on Bai hoc 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click(); // Single click
        // await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").dblclick(); // Double click
        // await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click({ button: 'right' }); // Right mouse click
        // await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click({modifiers: ['Shift']}); // Shift + right mouse click
    });

    await test.step("Input data into the form", async () => {
        await page.locator("//input[@id='username']").fill("congpham");
        await page.locator("//input[@id='email']").pressSequentially("congpham@gmail.com", {delay: 100});
    });

    await test.step("Radio button / Checkbox", async () => {
        let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
        await page.locator("//input[@id='male']").check();
        isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);
    });

    await test.step("Select dropdown", async () => {
        await page.locator("//select[@id='country']").selectOption("uk"); // Select by value
        // await page.locator("//select[@id='country']").selectOption({ label: "Canada" }); // Select by label
    });

    await test.step("Upload file", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/data-test.txt");
    });

    
});