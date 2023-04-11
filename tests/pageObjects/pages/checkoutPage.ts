import { Locator, Page, expect} from "@playwright/test";

let FirstSectionTitle = ('css=h2:has-text("Customer")');
let EmailInput = ('css=input[id="email"]');
let AgreePolicy = ('css=span:has-text("Yes, I agree with the ")');
let ContinueButton = ('css=button[id=checkout-customer-continue]');


let FirstName = ('css=input[id="firstNameInput"]');
let LastName = ('css=input[id="lastNameInput"]');

let Address = ('css=input[id="addressLine1Input"]');
let City = ('css=input[id="cityInput"]');
let PostalCode = ('css=input[id="postCodeInput"]');
let PhoneNumber = ('css=input[id="phoneInput"]');
let ContinueButton2 = ('css=button[id="checkout-shipping-continue"]');

let CreditCardNumber = ('css=input[id="ccNumber"]');
let CardName = ('css=input[id="ccName"]');
let Expiration = ('css=input[id="ccExpiry"]');
let CVVNumber = ('css=input[autocomplete="cc-csc"]');


export class CheckoutPage {

     readonly page: Page;
     readonly firstSectionTitle: Locator;

     readonly emailInput: Locator;
     readonly agreePolicy: Locator;
     readonly continueButton: Locator;


     readonly firstName: Locator;
     readonly lastName: Locator;

     readonly address: Locator;
     readonly city: Locator;
     readonly postalCode: Locator;
     readonly phoneNumber: Locator;
     readonly continueButton2: Locator;

     readonly creditCardNumber: Locator;
     readonly cardName: Locator;
     readonly expiration: Locator;
     readonly cvvNumber: Locator;


     constructor(page: Page) {
          this.page = page;
          this.firstSectionTitle = page.locator(FirstSectionTitle);

          this.emailInput = page.locator(EmailInput);
          this.agreePolicy = page.locator(AgreePolicy);
          this.continueButton = page.locator(ContinueButton);


          this.firstName = page.locator(FirstName);
          this.lastName = page.locator(LastName);
          this.address = page.locator(Address);
          this.city = page.locator(City);
          this.postalCode = page.locator(PostalCode);
          this.phoneNumber = page.locator(PhoneNumber);
          this.continueButton2 = page.locator(ContinueButton2);

          this.creditCardNumber = page.locator(CreditCardNumber);
          this.cardName = page.locator(CardName);
          this.expiration = page.locator(Expiration);
          this.cvvNumber = page.locator(CVVNumber);



     }
     async fillInEmailInfo() {
           await this.emailInput.click();
           await this.emailInput.fill('test_user5@hotmail.co.uk');
           await this.agreePolicy.click();

           await this.emailInput.click();
     }
     async fillInShippingInfo() {
                await this.firstName.click();
                await this.firstName.fill('James');
                await this.lastName.click();
                await this.lastName.fill('Fisher');
                await this.address.click();
                await this.address.fill('address');
                await this.city.click();
                await this.city.fill('city');
                await this.postalCode.click();
                await this.postalCode.fill('WD17 1DF');
                await this.phoneNumber.click();
                await this.phoneNumber.fill('07847437319');
                await this.continueButton2.click();
          }
     async fillInPaymentInfo() {
                await this.creditCardNumber.click();
                await this.creditCardNumber.fill('4111 1111 1111 1111');
                await this.cardName.click();
                await this.cardName.fill('test user');
                await this.expiration.click();
                await this.expiration.fill('0124');
                await this.cvvNumber.click();
                await this.cvvNumber.fill('333');
     }
     async checkFirstSectionTitle() {
                       await expect(this.firstSectionTitle).toContainText('Customer');
          }






}