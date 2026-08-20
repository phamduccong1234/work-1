import { test as base } from "@playwright/test";
import { EcommercePage, MaterialPage } from "../pom/pom";

type Pages = {
    materialPage: MaterialPage, 
    ecommercePage: EcommercePage
}

const test = base.extend<{pages: Pages}>({
    pages: async ({browser}, use) => {
        const materialContext = await browser.newContext();
        const ecommerceContext = await browser.newContext();

        const materialPage = new MaterialPage(await materialContext.newPage());
        const ecommercePage = new EcommercePage(await ecommerceContext.newPage());
        
        await materialPage.openMaterialPage();
        await ecommercePage.openEcommercePage();

        await use({
            materialPage, ecommercePage
        });
    },
});

export {test};