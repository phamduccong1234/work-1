import { Page, Locator, expect } from "@playwright/test";

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string = '//a[@href="01-xpath-register-page.html"]';
  xpathProductPage: string = '//a[@href="02-xpath-product-page.html"]';
  cssTodoPage: string = '//a[@href="03-xpath-todo-list.html"]';
  personalNotePage: string = '//a[@href="04-xpath-personal-notes.html"]';

  constructor(page: Page) {
    this.page = page;
  }

  openMaterialPage() {
    return this.page.goto("https://material.playwrightvn.com/");
  }

  gotoPage(pageName: string) {
    return this.page.locator(pageName).click();
  }
}

type Countries = {
  title: string;
  content: string;
};

export class RegisterPage extends MaterialBasePage {
  xpathUsername: string = "#username";
  xpathEmail: string = "#email";
  xpathGenderMale: string = "#male";
  xpathGenderFemale: string = "#female";
  // xpathHobbiesReading: string = "#reading";
  // xpathHobbiesTraveling: string = "#traveling";
  // xpathHobbiesCooking: string = "#cooking";
  xpathInterests: string = "#interests";
  xpathCountry: string = "#country";
  xpathDob: string = "#dob";
  xpathProfile: string = "#profile";
  xpathBio: string = "#bio";
  xpathRating: string = "#rating";
  xpathFavColor: string = "#favcolor";
  xpathTooltip: string = ".tooltip";
  xpathTooltipText: string = ".tooltiptext";
  xpathNewsLetter: string = "#newsletter";
  xpathSlider: string = ".slider.round";
  xpathStarRating: string = "#starRating";
  xpathBtnRegister: Locator;
  xpathUserInfo: string = "#userTable";
  xpathRatingValue: string = "#ratingValue";
  xpathStarRatingValue: string = "#starRatingValue";

  constructor(page: Page) {
    super(page);
    this.xpathBtnRegister = this.page.locator('//button[@type="submit"]');
  }

  async fillUsername(username: string) {
    await this.page.locator(this.xpathUsername).fill(username);
  }

  async fillEmail(email: string) {
    await this.page.locator(this.xpathEmail).fill(email);
  }

  async checkGender(gender: string) {
    if (gender === "male") {
      await this.page.locator(this.xpathGenderMale).click();
    } else {
      await this.page.locator(this.xpathGenderFemale).click();
    }
  }

  // async checkHobbies(hobbies: string) {
  //   if (hobbies === "reading") {
  //     await this.page.locator(this.xpathHobbiesReading).click();
  //   } else if (hobbies === "traveling") {
  //     await this.page.locator(this.xpathHobbiesTraveling).click();
  //   } else if (hobbies === "cooking") {
  //     await this.page.locator(this.xpathHobbiesCooking).click();
  //   }
  // }

  async checkHobbies(hobbies: string[]) {
    for (const hobby of hobbies) {
      await this.page.locator(`#${hobby.toLowerCase()}`).check();
    }
  }

  async selectInterests(interests: string) {
    await this.page.locator(this.xpathInterests).selectOption(interests);
  }

  async selectCountry(country: string) {
    await this.page.locator(this.xpathCountry).selectOption(country);
  }

  async fillDob(dob: string) {
    await this.page
      .locator(this.xpathDob)
      .pressSequentially(dob, { delay: 100 });
  }

  formatDob(dob: string) {
    const month = dob.substring(0, 2);
    const day = dob.substring(2, 4);
    const year = dob.substring(4, 8);

    return `${year}-${month}-${day}`;
  }

  async uploadProfile(profile: string) {
    await this.page.locator(this.xpathProfile).setInputFiles(profile);
  }

  async fillBio(bio: string) {
    await this.page.locator(this.xpathBio).fill(bio);
  }

  async chooseRating() {
    const rating = await this.page.locator(this.xpathRating).boundingBox();
    if (rating) {
      await this.page.mouse.click(
        rating.x + rating.width * 0.25,
        rating.y + rating.height * 0.5,
      );
    }
    return this.page.locator(this.xpathRatingValue).textContent();
  }

  async fillFavColor(favColor: string) {
    await this.page.locator(this.xpathFavColor).fill(favColor);
  }

  async hoverTooltip() {
    await this.page.locator(this.xpathTooltip).hover();
    return this.page.locator(this.xpathTooltipText).textContent();
  }

  async checkNewsLetter() {
    await this.page.locator(this.xpathNewsLetter).click();
    return this.page.locator(this.xpathNewsLetter).isChecked();
  }

  async clickSlider() {
    await this.page.locator(this.xpathSlider).click();
    return this.page.locator(this.xpathSlider).isChecked();
  }

  async chooseStarRating() {
    const star = await this.page.locator(this.xpathStarRating).boundingBox();
    if (star) {
      await this.page.mouse.click(
        star.x + star.width * 0.8,
        star.y + star.height * 0.5,
      );
    }
    return this.page.locator(this.xpathStarRatingValue).textContent();
  }

  async clickBtnRegister() {
    await this.xpathBtnRegister.click();
  }

  verifyUserInfo() {
    return this.page.locator(this.xpathUserInfo);
  }
}

export class ProductPage extends MaterialBasePage {
  // xpathProduct1: string = '//button[@data-product-id="1"]';
  // xpathProduct2: string = '//button[@data-product-id="2"]';
  // xpathProduct3: string = '//button[@data-product-id="3"]';
  // xpathProduct1Quantity: string = '//td[text()="Product 1"]/following-sibling::td[2]';
  // xpathProduct2Quantity: string = '//td[text()="Product 2"]/following-sibling::td[2]';
  // xpathProduct3Quantity: string = '//td[text()="Product 3"]/following-sibling::td[2]';
  xpathProductInfo: string = "#cart-items";

  constructor(page: Page) {
    super(page);
  }

  xpathProductButton(productId: number) {
    return this.page.locator(`//button[@data-product-id="${productId}"]`);
  }

  xpathProductName(productId: number) {
    return this.page.locator(`//td[text()="Product ${productId}"]`);
  }

  xpathProductPrice(productId: number) {
    return this.page.locator(
      `//td[text()="Product ${productId}"]/following-sibling::td[1]`,
    );
  }

  xpathProductQuantity(productId: number) {
    return this.page.locator(
      `//td[text()="Product ${productId}"]/following-sibling::td[2]`,
    );
  }

  xpathProductTotal(productId: number) {
    return this.page.locator(
      `//td[text()="Product ${productId}"]/following-sibling::td[3]`,
    );
  }

  xpathProductTotalPrice() {
    return this.page.locator(`//td[@class='total-price']`);
  }

  async addProduct(productId: number, count: number) {
    const button = this.xpathProductButton(productId);
    for (let i = 0; i < count; i++) {
      await button.click();
    }
  }

  async verifyProductName(productId: number) {
    await expect(this.xpathProductName(productId)).toHaveText(
      `Product ${productId}`,
    );
  }

  async verifyProductPrice(productId: number) {
    const productPriceText = await this.page
      .locator(
        `//div[text()="Product ${productId}"]/following-sibling::div[@class='product-price']`,
      )
      .textContent();
    const cartPriceText = await this.xpathProductPrice(productId).textContent();
    expect(productPriceText).toBe(cartPriceText);
  }

  async verifyProductQuantity(productId: number, expectedQuantity: number) {
    const quantityText =
      await this.xpathProductQuantity(productId).textContent();
    const quantity = Number(quantityText);
    expect(quantity).toBe(expectedQuantity);
  }

  async verifyProductTotal(productId: number) {
    // let total = 0;
    // const quantityText =
    //   await this.xpathProductQuantity(productId).textContent();
    // const quantity = Number(quantityText);
    // const priceText = await this.xpathProductPrice(productId).textContent();
    // const price = Number(priceText!.replace("$", ""));
    // total = quantity * price;
    // const totalText = await this.xpathProductTotal(productId).textContent();
    // const totalValue = Number(totalText!.replace("$", ""));
    // return expect(total).toBe(totalValue);
    // const quantity = Number(await this.xpathProductQuantity(productId).textContent());
    // const price = Number((await this.xpathProductPrice(productId).textContent())!.replace("$", ""));
    // const totalProductPrice = quantity * price;
    const totalProductPrice = await this.calculateProductTotal(productId);
    const actualTotalProduct = Number(
      (await this.xpathProductTotal(productId).textContent())!.replace("$", ""),
    );
    expect(actualTotalProduct).toBe(totalProductPrice);
  }

  async verifyProductTotalPrice(products: { productId: number }[]) {
    const expectedTotalPrice = await this.calculatePriceTotal(products);
    const actualTotalPrice = await this.getTotalPrice();
    expect(actualTotalPrice).toBe(expectedTotalPrice);
  }

  async calculateProductTotal(productId: number) {
    const quantity = Number(
      await this.xpathProductQuantity(productId).textContent(),
    );
    const price = Number(
      (await this.xpathProductPrice(productId).textContent())!.replace("$", ""),
    );
    return quantity * price;
  }

  async calculatePriceTotal(products: { productId: number }[]) {
    let total = 0;
    for (let product of products) {
      total += await this.calculateProductTotal(product.productId);
    }
    return total;
  }

  async getTotalPrice() {
    const totalText = await this.xpathProductTotalPrice().textContent();
    return Number(totalText!.replace("$", ""));
  }
}

export class TodoPage extends MaterialBasePage {
  xpathInputNewTask: string = "#new-task";
  xpathAddNewTaskButton: string = "#add-task";

  constructor(page: Page) {
    super(page);
  }

  async addNewTask() {
    for (let i = 0; i <= 100; i++) {
      await this.page.locator(this.xpathInputNewTask).fill(`Todo ${i}`);
      await this.page.locator(this.xpathAddNewTaskButton).click();
    }
  }

  async deleteOddTask() {
    this.page.on("dialog", (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i += 2) {
      await this.page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
  }

  async checkVisibleTodoTask(taskNumber: number) {
    const taskItem = await this.page.locator(
      `//ul[@id="task-list"]/li/following::span[text()='Todo ${taskNumber}']`,
    );
    expect(taskItem).toBeInViewport();
  }

  async checkHiddenTodoTask(taskNumber: number) {
    const taskItem = await this.page.locator(
      `//ul[@id="task-list"]/li/following::span[text()='Todo ${taskNumber}']`,
    );
    expect(taskItem).toHaveCount(0);
  }
}

export class PersonalNotesPage extends MaterialBasePage {
  xpathTitle: string = "#note-title";
  xpathContent: string = "#note-content";
  xpathAddNoteButton: string = "#add-note";
  xpathSearch: string = "#search";

  constructor(page: Page) {
    super(page);
  }

  async addNewNote(countries: Countries[]) {
    for (let country of countries) {
      await this.page.locator(this.xpathTitle).fill(country.title);
      await this.page.locator(this.xpathContent).fill(country.content);
      await this.page.locator(this.xpathAddNoteButton).click();
    }
  }

  async findNote(keyword: string) {
    await this.page.locator(this.xpathSearch).fill(keyword);
    // const noteItem = await this.page.locator(
    //   `//strong[normalize-space()='${keyword}']`,
    // );
    const noteItem = await this.page.locator('//ul[@id="notes-list"]/li');
    const count = await noteItem.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect((await noteItem.nth(i).innerText()).toLowerCase()).toContain(keyword.toLowerCase());
    }
  }
}
