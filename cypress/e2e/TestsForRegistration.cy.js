import user from '../fixtures/user.json'
import RegisterPage from '../support/pages/RegisterPage';
import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';

it('The user cannot log in without filling in all the fields with the correct data  TEST1', () => {
  cy.log('Registration');
  HomePage.GetLoginPage();
  LoginPage.getNewCustomer().click();
  RegisterPage.getRegEmail().type(user.emailIncorrect);
  RegisterPage.getRegPassword().type(user.passwordIncorrect);
  RegisterPage.getRepeatPassword().type(user.passwordRepeadIncorrect);
  RegisterPage.getSecurityQuestion().click();
  RegisterPage.getQuestionName().click();
  RegisterPage.getAnswer().type(user.answer);
  cy.get('#registerButton.mat-focus-indicator')
    .should('have.attr', 'disabled');
})

it('The user can log in by filling in all the fields with the correct data  TEST2', () => {
  cy.log('Registration');
  HomePage.GetLoginPage();
  LoginPage.getNewCustomer().click();
  RegisterPage.registerUser();
  cy.get('.mat-simple-snack-bar-content')
    .should('have.text', 'Registration completed successfully. You can now log in.');

  cy.log('Authorize user');
  LoginPage.LoginUser();
  cy.get('[aria-label="Show the shopping cart"]')
    .should('be.visible')
})

