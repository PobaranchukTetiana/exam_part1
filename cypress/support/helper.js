///<reference types="cypress"/>

import RegisterPage from '../support/pages/RegisterPage';
import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import BasketPage from '../support/pages/BasketPage';
import AddressPage from '../support/pages/AddressPage';
import DeliveryPage from '../support/pages/DeliveryPage';
import PaymentPage from '../support/pages/PaymentPage';
import OrderSummary from '../support/pages/OrderSummaryPage';

export const dismissCookies = () => {
    cy.log('dismissCookies');
    cy.setCookie('welcomebanner_status', 'dismiss');
    cy.reload();
}

export const RegistrateUser = () => {
    cy.log('Registration');
    HomePage.GetLoginPage();
    LoginPage.getNewCustomer().click();
    RegisterPage.registerUser();
}
export const LoginUser = () => {
    cy.log('authorization');
    HomePage.GetLoginPage();
    LoginPage.LoginUser();
}
export const findProduct = () => {
    cy.log(`Order product`);
    let product = 'Fruit Press';
    HomePage.getSearchButton().click();
    HomePage.getSearch().type(product, { enter: true });
    cy.contains('mat-card', 'Fruit Press').within(() => {
        HomePage.getAddtoBasketButton().should('be.visible').click();
    });
    cy.get('.fa-layers-counter').should('contain', '1');
    HomePage.getOpenCartButton().click();
    cy.get('mat-cell.mat-column-product').should('contain', `${product}`);

}

export const BuyProduct = () => {
    BasketPage.getcheckoutButton().click();
    BasketPage.getAddressButton().click();
    cy.log('add new address')
    AddressPage.submitAddressForm();
    DeliveryPage.getRadioButton().click();
    DeliveryPage.getContinueButton().contains('Continue').click();
    PaymentPage.getAddNewCardButton().click();
    cy.log('Add new card');
    PaymentPage.submitNewCard();
    OrderSummary.PayButton().click();
}
