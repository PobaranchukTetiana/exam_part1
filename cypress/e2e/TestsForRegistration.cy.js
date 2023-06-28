import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email();
user.answer = faker.person.firstName();
user.emailIncorrect = faker.internet.emoji();

it('RegistrationTEST1', () => {
  cy.log('The user cannot log in without filling in all the fields with the correct data');
  cy.visit('/');
  cy.get('.close-dialog').click();
  cy.get('#navbarAccount').click();
  cy.get('#navbarLoginButton').click();
  cy.get('#newCustomerLink .primary-link').click();
  cy.get('#emailControl').type(user.emailIncorrect);
  cy.get('#passwordControl').type(user.passwordIncorrect);
  cy.get('#repeatPasswordControl').type(user.passwordRepeadIncorrect);
  cy.get('[name="securityQuestion"]').click();
  cy.get('[id="mat-option-4"]').click();
  cy.get('#securityAnswerControl').type(user.answer);
  cy.get('#registerButton.mat-focus-indicator').should('have.attr', 'disabled');
})

it('RegistrationTEST2', () => {
  cy.log('The user can log in by filling in all the fields with the correct data');
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

  cy.log('Authorize user');
  cy.get('#email').type(user.email);
  cy.get('#password').type(user.password);
  cy.get('button[type="submit"]').contains('Log in').click();
  cy.get('[routerlink="/basket"]').click()
  cy.get('app-purchase-basket').contains(user.email).should('exist');
})
