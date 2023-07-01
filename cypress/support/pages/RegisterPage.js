///<reference types="cypress"/>

import user from '../../../cypress/fixtures/user.json';
import { faker } from '@faker-js/faker';
import path from 'path';

class Register {
    visit() {
        cy.log('Open home page');
        cy.visit('/register');
    }
    closeBanner() {
        return cy.get('.close-dialog');
    }
    getRegEmail() {
        return cy.get('#emailControl');
    }
    getRegPassword() {
        return cy.get('#passwordControl');
    }
    getRepeatPassword() {
        return cy.get('#repeatPasswordControl');
    }
    getSecurityQuestion() {
        return cy.get('[name="securityQuestion"]');
    }
    getQuestionName() {
        return cy.get('[id="mat-option-4"]');
    }
    getAnswer() {
        return cy.get('#securityAnswerControl');
    }
    getRegisterhButton() {
        return cy.get('#registerButton.mat-focus-indicator');
    }

    registerUser() {
        const userData = require('../../../cypress/fixtures/user.json');
        const user = {
            email: userData.email = faker.internet.email(),
            answer: userData.answer = faker.person.firstName(),
            password: userData.password,
            passwordRepead: userData.passwordRepead
        };

        this.getRegEmail().type(user.email);
        this.getRegPassword().type(user.password);
        this.getRepeatPassword().type(user.passwordRepead);
        this.getSecurityQuestion().click();
        this.getQuestionName().click();
        this.getAnswer().type(user.answer);
        this.getRegisterhButton().click();
    }

}
export default new Register();

