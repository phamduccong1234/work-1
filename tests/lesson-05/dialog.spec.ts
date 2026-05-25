import { test } from '@playwright/test';

test('Interact with confirmation dialog', async ({ page}) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
    await page.locator("//input[@id='new-task']").fill("Cong Pham");
    await page.locator("//button[@id='add-task']").click();
    page.on("dialog", async dialog => {
        dialog.accept();
    })
    await page.locator("//button[text()='Delete']").click();
});