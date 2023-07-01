import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import LoginPage from '../support/pages/LoginPage';
import { dismissCookies } from "../support/helper";

it('Unauthorized user cannot login Test1', () => {
  cy.log('Test1');
  user.email = faker.internet.email();
  LoginPage.visit();
  dismissCookies();
  LoginPage.LoginUser();
  cy.get('.error ').should('contain', 'Invalid email or password');
})

it('Login button disabled when user didnt enter email Test2', () => {
  cy.log('Test2');
  LoginPage.visit();
  dismissCookies();
  LoginPage.getPassword().type(user.password);
  cy.get('button[type="submit"]').should('have.attr', 'disabled');
})
