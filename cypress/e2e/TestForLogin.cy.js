import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email();
user.password = faker.internet.password();

it('LoginTest1', () => {
  cy.log('Unauthorized user cannot login ');
  cy.visit('/login');
  cy.get('.close-dialog').click();
  cy.get('#email').type(user.email);
  cy.get('#password').type(user.password);
  cy.get('button[type="submit"]').contains('Log in').click();
  cy.get('.error ').should('contain', 'Invalid email or password');

})

it('LoginTest2', () => {
  cy.log('Login button disabled when user didnt enter email');
  cy.visit('/login');
  cy.get('.close-dialog').click();
  cy.get('#password').type(user.password);
  cy.get('button[type="submit"]').should('have.attr', 'disabled');
})
