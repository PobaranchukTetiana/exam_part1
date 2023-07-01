class OrderSummary {
    visit() {
        cy.log('Open home page');
        cy.visit('/order-summary');
    }
    PayButton() {
        return cy.get('#checkoutButton');
    }
}
export default new OrderSummary();