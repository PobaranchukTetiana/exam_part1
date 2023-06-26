export function login(user) {

    it('Registration', () => {
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
    })
}



