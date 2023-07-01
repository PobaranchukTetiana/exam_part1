class DeliveryPage {
    visit() {
        cy.log('Open home page');
        cy.visit('/delivery-method');
    }
    getRadioButton() {
        return cy.get('#mat-radio-41');
    }
    getContinueButton() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]');
    }


}
export default new DeliveryPage();