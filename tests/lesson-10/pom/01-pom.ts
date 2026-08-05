import { Page, Locator } from "@playwright/test";

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string = '//a[@href="01-xpath-register-page.html"]';
  xpathProductPage: string = '//a[@href="02-xpath-product-page.html"]';
  cssTodoPage: string = '//a[@href="03-xpath-todo-list.html"]';
  personalNote: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalNote = this.page.locator(
      'a[@href="04-xpath-personal-notes.html"]',
    );
  }

  openMaterialPage() {
    return this.page.goto("https://material.playwrightvn.com/");
  }

  gotoPage(pageName: string) {
    return this.page.locator(pageName).click();
  }
}

export class RegisterPage extends MaterialBasePage {
  xpathUsername: string = "#username";
  xpathEmail: string = "#email";
  xpathGenderMale: string = "#female";
  xpathGenderFemale: string = "#male";
  xpathHobbiesReading: string = "#reading";
  xpathHobbiesTraveling: string = "#traveling";
  xpathHobbiesCooking: string = "#cooking";
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
  xpathSlider: string = ".slider round";
  xpathStarRating: string = "#starRating";
  xpathBtnRegister: Locator;

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
    for (const hobby of hobbies){
      await this.page.locator(`this.xpathHobbies${hobby}`).click();
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
  }

  async fillFavColor(favColor: string) {
    await this.page.locator(this.xpathFavColor).fill(favColor);
  }

  async hoverTooltip(){
    await this.page.locator(this.xpathTooltip).hover();
    return this.page.locator(this.xpathTooltipText).textContent();
  }

  async checkNewsLetter() {
    await this.page.locator(this.xpathNewsLetter).click();
  }

  async clickSlider() {
    await this.page.locator(this.xpathSlider).click();
  }

  async chooseStarRating() {
    const star = await this.page.locator(this.xpathStarRating).boundingBox();
    if (star) {
      await this.page.mouse.click(
        star.x + star.width * 0.8,
        star.y + star.height * 0.5,
      );
    }
  }

  async clickBtnRegister() {
    await this.xpathBtnRegister.click();
  }
}
