import { test } from '@playwright/test';

test('Bài học 1 test', async ({ page}) => {
    test.step("Go the home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
});