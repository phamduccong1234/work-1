import {test  } from "@playwright/test";
import { HomePage } from "./home.page";

test('Add product to cart', async ({page}) => {
    const homePage = new HomePage(page);
    const productPage = homePage.navigateToProductPage();

    (await productPage).addToCart();
})