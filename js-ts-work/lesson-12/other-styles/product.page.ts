import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;

    constructor(page: Page){
        this.page = page
    }

    async addToCart(){
        await this.page.locator("//div").click();
    }
}