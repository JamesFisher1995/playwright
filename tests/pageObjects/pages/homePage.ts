import { Locator, Page, expect } from "@playwright/test";

let Title = ('css=span[class="header-logo-text"]');
let SearchButton = ('css=button[id="quick-search-expand"]');
let SearchBox = ('css=input[id="nav-quick-search"]');

export class HomePage {

     readonly page: Page;
     readonly title: Locator;
     readonly searchButton: Locator;
     readonly searchBox: Locator;

     constructor(page: Page) {
          this.page = page;
          this.title = page.locator(Title);
          this.searchButton = page.locator(SearchButton);
          this.searchBox = page.locator(SearchBox);

     }
     async clickSearch() {
          await this.searchButton.click();

     }
     async inputProduct() {

          await this.searchBox.click();
          await this.searchBox.fill('Oak Cheese Grater');


     }
     async goto() {
          await this.page.goto('https://cornerstone-light-demo.mybigcommerce.com');
     }
     async checkTitle() {
                await expect(this.title).toHaveText('Cornerstone Demo');
          }

}