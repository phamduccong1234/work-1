import { test } from '@playwright/test';

test('Playwright selector', async ({ page}) => {
    const title = await page.locator("//h1[@id='self']").textContent();
    const title2 = await page.getByRole('heading', { name: 'User Registration' }).textContent();

    await page.getByRole("checkbox", {name: "Traveling"}).check();
    await page.getByRole("checkbox", {name: "Cooking"}).check();
    await page.getByRole("radio", { name: "Male" , exact: true}).click();
});