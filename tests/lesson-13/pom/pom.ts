import { Page } from "@playwright/test";

export class MaterialPage {
    page: Page;
    baseUrl: string

    constructor(page: Page){
        this.page = page;
        this.baseUrl = "https://material.playwrightvn.com"
    }

    async navigateTo(){
        await this.page.goto(this.baseUrl);
    }
}

export class EcommercePage {
    page: Page;
    baseUrl: string;

    constructor(page: Page){
        this.page = page;
        this.baseUrl = "https://e-commerce-dev.betterbytesvn.com"
    }

    async navigateTo(){
        await this.page.goto(this.baseUrl);
    }
}