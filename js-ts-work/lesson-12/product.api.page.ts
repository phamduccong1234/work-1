import { APIRequestContext, expect } from "@playwright/test";

export class ProductApiPage {
    request: APIRequestContext;
    baseUrl: string

    constructor(request: APIRequestContext){
        this.request = request
        this.baseUrl = "https://material.playwrightvn.com/api/product-catalog/v1"
    }

    async getProducts(){
        const response = await this.request.get(`${this.baseUrl}/products.php`);
        expect(response.status()).toBe(200);

        const responseJson = response.json();
        return responseJson;
    }
}