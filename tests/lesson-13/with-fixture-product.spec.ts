import { test } from "./fixture/fixture";

test("Product page", async ({ pages }) => {
  const products = [
    { productId: 1, productName: "Product 1", productQuantity: 2},
    { productId: 2, productName: "Product 2", productQuantity: 3},
    { productId: 3, productName: "Product 3", productQuantity: 1}
  ]

  await test.step("Go to Product page", async () => {
    await pages.materialPage.gotoPage(pages.materialPage.xpathProductPage);
  });

  await test.step("Add product into cart", async () => {
    for (const product of products) {
      await pages.productPage.addProduct(product.productId, product.productQuantity);
    }
  });

  await test.step("Verify product information", async () => {
    for (const product of products) {
      await pages.productPage.verifyProductName(product.productId);
      await pages.productPage.verifyProductPrice(product.productId);
      await pages.productPage.verifyProductQuantity(product.productId, product.productQuantity);
      await pages.productPage.verifyProductTotal(product.productId);
    }
  });

  await test.step("Verify total price", async () => {
    await pages.productPage.verifyProductTotalPrice(products);
  });
});
