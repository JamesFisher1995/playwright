
import { test, expect, Page } from '@playwright/test';
import { HomePage } from '/Users/jamesfisher/Documents/playwright2/tests/pageObjects/pages/homePage.ts';
import { ProductListPage } from '/Users/jamesfisher/Documents/playwright2/tests/pageObjects/pages/productListPage.ts';
import { ProductPage } from '/Users/jamesfisher/Documents/playwright2/tests/pageObjects/pages/productPage.ts';
import { CheckoutPage } from '/Users/jamesfisher/Documents/playwright2/tests/pageObjects/pages/checkoutPage.ts';
import { CompletePage } from '/Users/jamesfisher/Documents/playwright2/tests/pageObjects/pages/completePage.ts';

test('buy product', async ({ page }) => {
  await page.goto('https://cornerstone-light-demo.mybigcommerce.com');
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.checkTitle();
  await homePage.clickSearch();
  await homePage.inputProduct()
  await page.keyboard.press('Enter');

  const productListPage = new ProductListPage(page);
  await productListPage.checkTitle();
  await productListPage.clickProduct();


  const productPage = new ProductPage(page);
  await productPage.checkProductTitle();
  await productPage.addToCart();
  await productPage.proceedToCheckout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkFirstSectionTitle()
  await checkoutPage.fillInEmailInfo();
  await page.keyboard.press('Enter');

  await checkoutPage.fillInShippingInfo();
  await page.keyboard.press('Enter');
  await checkoutPage.fillInPaymentInfo();
  await page.keyboard.press('Enter');

  const completePage = new CompletePage(page);
  await completePage.checkConfirmationText();

});