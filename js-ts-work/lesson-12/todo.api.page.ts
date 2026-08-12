import { APIRequestContext, expect } from "@playwright/test";

export class TodoApiPage {
    request: APIRequestContext;
    baseUrl: string

    constructor(request: APIRequestContext){
        this.request = request;
        this.baseUrl = "https://material.playwrightvn.com/api/todo-app/v1"
    }

    // Get all todo
    async getAllTodo(){
        const response = await this.request.get(`${this.baseUrl}/todos.php`);
        expect(response.status()).toBe(200);

        const responseJson = await response.json();
        return responseJson;
    }

    // Get single todo
    async getTodo(id: number){
        const response = await this.request.get(`${this.baseUrl}/todo.php?id=${id}`);
        expect(response.status()).toBe(200);

        const responseJson = await response.json();
        return responseJson;
    }

    // Create todo

    // Update todo

    // Update partial todo

    // Delete todo
}