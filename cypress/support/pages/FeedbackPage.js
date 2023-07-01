class FeedbackPage {
    visit() {
        cy.log('Open home page');
        cy.visit('/contact');
    }
    getComment() {
        return cy.get('#comment');
    }
    getRating() {
        return cy.get('#rating');
    }
    getCaptcha() {
        return cy.get('#captcha');
    }
    getResult() {
        return cy.get('#captchaControl');
    }
    getsubmitButton() {
        return cy.get('#submitButton');
    }

}
export default new FeedbackPage();
