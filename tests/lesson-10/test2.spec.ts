import { test, expect } from "@playwright/test";
import { MaterialBasePage, ProductPage } from "./pom/01-pom";

test("Product page", async ({ page }) => {
  const materialBasePage = new MaterialBasePage(page);
  const productPage = new ProductPage(page);

  const products = [
    { productId: 1, productName: "Product 1", productQuantity: 2},
    { productId: 2, productName: "Product 2", productQuantity: 3},
    { productId: 3, productName: "Product 3", productQuantity: 1}
  ]

  await test.step("Go to material page", async () => {
    await materialBasePage.openMaterialPage();
  });

  await test.step("Go to Product page", async () => {
    await materialBasePage.gotoPage(materialBasePage.xpathProductPage);
  });

  await test.step("Add product into cart", async () => {
    for (const product of products) {
      await productPage.addProduct(product.productId, product.productQuantity);
    }
  });

  await test.step("Verify product information", async () => {
    for (const product of products) {
      await productPage.verifyProductName(product.productId);
      await productPage.verifyProductPrice(product.productId);
      await productPage.verifyProductQuantity(product.productId, product.productQuantity);
      await productPage.verifyProductTotal(product.productId);
    }
  });

  await test.step("Verify total price", async () => {
    await productPage.verifyProductTotalPrice(products);
  });
});
