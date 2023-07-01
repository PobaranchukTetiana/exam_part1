class BasketPage {
    visit() {
        cy.log('Open home page');
        cy.visit('/basket');
    }
    getcheckoutButton() {
        return cy.get('button#checkoutButton');
    }
    getAddressButton() {
        return cy.get('[aria-label="Add a new address"]');
    }
    getDelButton() {
        return cy.get('.mat-focus-indicator.mat-icon-button.mat-button-base');
    }



}
export default new BasketPage();