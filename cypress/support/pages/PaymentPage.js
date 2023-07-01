import { faker } from '@faker-js/faker';

class PaymentPage {
    visit() {
        cy.log('Open home page');
        cy.visit('/payment/shop');
    }
    getAddNewCardButton() {
        return cy.contains('Add new card');
    }
    getName() {
        return cy.get('mat-form-field[appearance="outline"] input[aria-required="true"]');
    }
    getCardNumber() {
        return cy.get('mat-form-field[appearance="outline"] input[aria-required="true"]');
    }
    getExpiryMonth() {
        return cy.get('mat-form-field[appearance="outline"] select[aria-required="true"]:eq(0)');
    }
    getExpiryYear() {
        return cy.get('mat-form-field[appearance="outline"] select[aria-required="true"]:eq(1)');
    }
    getSubmitButton() {
        return cy.get('#submitButton');
    }
    getCartOption() {
        return cy.get('span.mat-radio-inner-circle');
    }
    getContinueButton() {
        return cy.get('[aria-label="Proceed to review"]');
    }

    submitNewCard() {

        const cardName = faker.internet.userName();
        const cardNumber = faker.phone.number('4### #### #### ####');
        const expiryMonth = Math.floor(Math.random() * 12) + 1;
        const expiryYear = new Date().getFullYear() + 60;

        this.getName().eq(0).type(cardName, { force: true });
        this.getCardNumber().each(($input) => {
            cy.wrap($input).type(cardNumber, { force: true });
        });
        this.getExpiryMonth().select(expiryMonth.toString());
        this.getExpiryYear().select(expiryYear.toString());
        this.getSubmitButton().click();
        this.getCartOption().click();
        this.getContinueButton().click();
    }

}
export default new PaymentPage();
