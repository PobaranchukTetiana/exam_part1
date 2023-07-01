import user from '../../../cypress/fixtures/user.json';
import { faker } from '@faker-js/faker';
import path from 'path';


class Login {
    visit() {
        cy.log('Open home page');
        cy.visit('/login');
    }
    closeBanner() {
        return cy.get('.close-dialog');
    }
    getNewCustomer() {
        return cy.get('#newCustomerLink .primary-link');
    }
    getEmail() {
        return cy.get('#email');
    }
    getPassword() {
        return cy.get('#password');
    }
    getSabmitButton() {
        return cy.get('button[type="submit"]');
    }
    getSabmitButton() {
        return cy.get('button[type="submit"]');
    }

    LoginUser() {
        const userData = require('../../../cypress/fixtures/user.json');
        const user = {
            email: userData.email,
            password: userData.password
        }
        this.getEmail().type(user.email);
        this.getPassword().type(user.password);
        this.getSabmitButton().contains('Log in').click();
    }


}

export default new Login();
