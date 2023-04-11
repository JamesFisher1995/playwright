import { Locator, Page, expect} from "@playwright/test";

let Title = ('css=h1[class="page-heading"]');
let ProductImage = ('css=li[class="product"]');

export class ProductListPage {

     readonly page: Page;
     readonly title: Locator;
     readonly productImage: Locator;

     constructor(page: Page) {
          this.page = page;
          this.title = page.locator(Title);
          this.productImage = page.locator(ProductImage);


     }
     async clickProduct() {
               await this.productImage.click();

     }
     async checkTitle() {
             await expect(this.title).toContainText('Oak Cheese Grater');
     }



}