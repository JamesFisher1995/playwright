import { Locator, Page, expect} from "@playwright/test";

let Title = ('css=h1[class="productView-title"]');
let AddToCartButton = ('css=div[class="add-to-cart-buttons"]');
let Cart = ('xpath=/html/body/header/nav/ul/li[5]');
let CheckoutButton = ('css=a[href="/checkout"]');


export class ProductPage {

     readonly page: Page;
     readonly title: Locator;
     readonly addToCartButton: Locator;
     readonly cart: Locator;
     readonly checkoutButton: Locator;

     constructor(page: Page) {
          this.page = page;
          this.title = page.locator(Title);
          this.addToCartButton = page.locator(AddToCartButton);
          this.cart = page.locator(Cart);
          this.checkoutButton = page.locator(CheckoutButton);


     }
     async addToCart() {
           await this.addToCartButton.click();

     }
     async proceedToCheckout() {
           await this.checkoutButton.click();
     }
     async checkProductTitle() {
                  await expect(this.title).toContainText('Oak Cheese Grater');
     }





     //async checkTitle() {
     //     await this.title.toBeVisible();

     //}



}