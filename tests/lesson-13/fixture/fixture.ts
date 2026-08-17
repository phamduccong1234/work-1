import { test as base } from "@playwright/test";
import { EcommercePage, MaterialPage } from "../pom/pom";

type Pages = {
    materialPage: MaterialPage, 
    ecommercePage: EcommercePage
}

const test = base.extend<{pages: Pages}>({
    pages: async ({context}, use) => {
        const materialPage = new MaterialPage(await context.newPage());
        const ecommercePage = new EcommercePage(await context.newPage());
        
        await materialPage.navigateTo();
        await ecommercePage.navigateTo();


        await use({
            materialPage, ecommercePage
        });
    },
});

export {test};