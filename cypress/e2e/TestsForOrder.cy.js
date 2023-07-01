///<reference types="cypress"/>

import RegisterPage from '../support/pages/RegisterPage';
import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import BasketPage from '../support/pages/BasketPage';
import AddressPage from '../support/pages/AddressPage';
import DeliveryPage from '../support/pages/DeliveryPage';
import PaymentPage from '../support/pages/PaymentPage';
import OrderSummary from '../support/pages/OrderSummaryPage';

describe("Test for order", () => {

    before(() => {
        cy.log('Registration');
        HomePage.GetLoginPage();
        LoginPage.getNewCustomer().click();
        RegisterPage.registerUser();
    }),
        beforeEach(() => {
            cy.log('authorization');
            HomePage.GetLoginPage();
            LoginPage.LoginUser();
        }),

        it('User can make the order when all fields are filled in correctly TEST1', () => {
            HomePage.FindAndAddProduct();
            cy.get('.fa-layers-counter').should('contain', '1');
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
            cy.get('.confirmation').should('have.text', 'Thank you for your purchase!');
        }),

        it('User can delete the item from the basket TEST2', () => {
            cy.log('TEST2');
            HomePage.getSearchButton().click();
            cy.contains('mat-card', 'Apple Juice (1000ml)').within(() => {
                HomePage.getAddtoBasketButton().should('be.visible').click();
            });
            cy.get('.fa-layers-counter').should('contain', '1');
            HomePage.getOpenCartButton().click();
            BasketPage.getDelButton().click({ multiple: true });
            BasketPage.getcheckoutButton().should('have.attr', 'disabled');
        })


})
