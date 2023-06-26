///<reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage";
import Address from "../support/pages/Address";
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email();
user.answer = faker.person.firstName();

describe("Order", () => {

    before(() => {
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

        cy.log('Authorize user');
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('button[type="submit"]').contains('Log in').click();
        cy.get('[routerlink="/basket"]').click()
        cy.get('app-purchase-basket').contains(user.email).should('exist');
        cy.get('[routerlink="/search"]').click();

    })

    it('Order', () => {
        cy.get('[routerlink="/search"]').click();
        cy.contains('mat-card', 'Apple Juice (1000ml)').within(() => {
            cy.get('button[aria-label="Add to Basket"]').should('be.visible').click();
        });
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.get('button#checkoutButton').click();
        cy.get('[aria-label="Add a new address"]').click();
    })
        
        it('Add address', () => {
            const CountryField = 'Country';
            const NameField = 'Name';
            const MobileField = '602632677';
            const ZIPField = '20960';
            const AddressField = 'Address';
            const CityField = 'City';


            Address.submitAddressForm(CountryField, NameField, MobileField, ZIPField, AddressField, CityField);

        });

    })

