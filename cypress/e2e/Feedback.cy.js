import { faker } from '@faker-js/faker'
import HomePage from '../support/pages/HomePage';
import FeedbackPage from '../support/pages/FeedbackPage';
import { dismissCookies } from "../support/helper";

it('Send Feedback form', () => {
  cy.log('Feedback');
  let comment = faker.lorem.sentence();
  HomePage.visit();
  dismissCookies();
  HomePage.getHamburgerMenu().click();
  HomePage.getFeedbackTab().click();
  FeedbackPage.getComment().type(comment);
  FeedbackPage.getRating().type('3');

  FeedbackPage.getCaptcha().then((captchaElement) => {
    const captchaText = captchaElement.text();
    cy.log(captchaText);
    const captchaResult = eval(captchaText.replace(/\s/g, ''));
    const captchaResultString = captchaResult.toString();
    FeedbackPage.getResult().type(captchaResultString);
    FeedbackPage.getsubmitButton().click();
    cy.get('.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback');
  });
})



