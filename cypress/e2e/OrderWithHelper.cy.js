///<reference types="cypress"/>

import { RegistrateUser, LoginUser, findProduct, BuyProduct } from "../support/helper";

it("Order with helper", () => {
  cy.log('helper');
  RegistrateUser();
  LoginUser();
  findProduct();
  BuyProduct();
  cy.get('.confirmation').should('have.text', 'Thank you for your purchase!');

});
