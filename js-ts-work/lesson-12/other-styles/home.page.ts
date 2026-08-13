import { Page } from "@playwright/test";
import { ProductPage } from "./product.page";

export class HomePage {
    page: Page;

    constructor(page: Page){
        this.page = page
    }

    async navigateToProductPage(){
        this.page.locator("//div").click();
        return new ProductPage(this.page);
    }
}