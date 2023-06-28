///<reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

export const login = () => {
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
}

export const findProduct = () => {
    const CountryField = faker.location.country();
    const NameField = faker.internet.userName();
    const MobileField = faker.phone.number('50113####');
    const ZIPField = faker.phone.number('###-###');
    const AdressField = faker.location.streetAddress();
    const CityField = faker.location.city();
    const fakeCard = {
        name: faker.internet.userName(),
        cardNumber: faker.phone.number('################'),
        expiryMonth: Math.floor(Math.random() * 12) + 1,
        expiryYear: new Date().getFullYear() + 60,
    };

  cy.log('Find product and buy');
  cy.get('[routerlink="/search"]').click();
  cy.contains('mat-card', 'Fruit Press').within(() => {
    cy.get('button[aria-label="Add to Basket"]').should('be.visible').click();
  });
  cy.get('[aria-label="Show the shopping cart"]').click();
  cy.get('button#checkoutButton').click();
  cy.get('[aria-label="Add a new address"]').click();
  cy.get('[data-placeholder="Please provide a country."]').type(CountryField);
  cy.get('[placeholder="Please provide a name."]', { timeout: 10000 }).type(NameField);
  cy.get('[placeholder="Please provide a mobile number."]').type(MobileField);
  cy.get('[placeholder="Please provide a ZIP code."]').type(ZIPField);
  cy.get('#address').type(AdressField);
  cy.get('[placeholder="Please provide a city."]').type(CityField);
  cy.get('[type="submit"]#submitButton').click();
  cy.get('#mat-radio-40').click();
  cy.get('button.mat-button.mat-primary').contains('Continue').click();
  cy.get('#mat-radio-41').click();
  cy.get('button[aria-label="Proceed to delivery method selection"]').contains('Continue').click();
  cy.contains('Add new card').click();
  cy.get('mat-form-field[appearance="outline"] input[aria-required="true"]').eq(0).type(fakeCard.name, { force: true });
       cy.get('mat-form-field[appearance="outline"] input[aria-required="true"]').each(($input) => {
          cy.wrap($input).type(fakeCard.cardNumber, { force: true });
           });
  cy.get('mat-form-field[appearance="outline"] select[aria-required="true"]:eq(0)').select(fakeCard.expiryMonth.toString());
  cy.get('mat-form-field[appearance="outline"] select[aria-required="true"]:eq(1)').select(fakeCard.expiryYear.toString());
  cy.get('#submitButton').click();
  cy.get('span.mat-radio-inner-circle').click();
  cy.get('[aria-label="Proceed to review"]').click();
  cy.get('#checkoutButton').click();
  cy.get('.confirmation').should('have.text', 'Thank you for your purchase!');
        }
 
