///<reference types="cypress"/>

import login from "../support/helper";
import { findProduct } from "../support/helper";

it("Order", () => {

    login();
    findProduct();

  });




/*
  it('should perform some test after login', () => {
    cy.get('[routerlink="/search"]').click();
    cy.searchProduct('Fruit Press');
    cy.contains('Add to Cart').click();
    cy.get('.cart-item').should('contain', 'Fruit Press');
    cy.contains('View Cart').click();
    cy.get('.cart-item').should('contain', 'Fruit Press');
    cy.contains('Checkout').click();
    cy.get('#name').type('John Doe');
    cy.get('#address').type('123 Main St');
    cy.get('#payment-method').select('Credit Card');
    cy.get('#card-number').type('1234567890123456');
    cy.get('#expiry-date').type('12/24');
    cy.contains('Place Order').click();
    cy.get('.order-confirmation').should('contain', 'Thank you for your order!');
  });
});



/*


  export function findProduct(productName) {
    cy.get('body').then((body) => {
      if (body.find(`.item-name:contains(${productName})`).length > 0) {
        cy.get(`.item-name:contains(${productName})`).click();
      } else {
        cy.get('ul.pagination a').contains('>').click();
        findProduct(productName);
      }
    });
  }
*/


