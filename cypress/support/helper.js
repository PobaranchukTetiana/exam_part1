  ///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

const login = () => {
  user.email = faker.internet.email();
  user.answer = faker.person.firstName();

  cy.log('Registration');
  cy.visit('/');
  cy.get('.close-dialog').click();
  cy.get('#navbarAccount').click();
  cy.get('#navbarLoginButton').click();
  cy.get('#newCustomerLink .primary-link').click();
  cy.get('#emailControl').type(user.email);
  cy.get('#passwordControl').type(user.password);
  cy.get('#repeatPasswordControl').type(user.passwordRepead);
  cy.get('[name="securityQuestion"]').click();
  cy.get('[id="mat-option-4"]').click();
  cy.get('#securityAnswerControl').type(user.answer);
  cy.get('#registerButton.mat-focus-indicator').click();

  cy.log('authorization');
  cy.visit('/');
  cy.get('#navbarAccount').click({ force: true });
  cy.get('#navbarLoginButton').click({ force: true });
  cy.get('body').then(($body) => {
    if ($body.find('.close-dialog').length > 0) {
      cy.get('.close-dialog').first().click();
    }
  });
  cy.get('#email').type(user.email, { force: true });
  cy.get('#password').type(user.password, { force: true });
  cy.get('button[type="submit"]').contains('Log in').click();
  cy.get('[routerlink="/basket"]').click();
  cy.get('app-purchase-basket').contains(user.email).should('exist');
  cy.get('[routerlink="/search"]').click();
};
export default login;

export function findProduct() {
    cy.get('[routerlink="/search"]').click();
    cy.contains('.item-name', 'Fruit Press')
      .should('be.visible') 
      .click(); 
  }

  
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
  
Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('.item-name').contains(productName).click();
  });
*/
