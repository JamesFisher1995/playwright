import { Locator, Page, expect} from "@playwright/test";

let Title = ('css=div[class="orderConfirmation"]');

export class CompletePage {

     readonly page: Page;
     readonly title: Locator;


     constructor(page: Page) {
          this.page = page;
          this.title = page.locator(Title);





     }
     async checkConfirmationText() {
           await expect(this.title).toContainText('Thank you James!');
     }




}