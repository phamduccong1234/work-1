import { expect, test } from "@playwright/test";
import { ProductApiPage } from "./product.api.page";

test("Get products", async ({ request }) => {
  const productApiPage = new ProductApiPage(request);
  const responseJson = await productApiPage.getProducts();

  console.log(responseJson.data.products.length);
  expect(responseJson.data.products.length).toBe(10);
});
