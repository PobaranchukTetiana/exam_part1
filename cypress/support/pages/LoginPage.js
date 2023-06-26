class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('/login')
        cy.get('.close-dialog').click();
    }

    getLoginField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]');
    }

    submitLoginForm(email, password){
        cy.log(`Auth user with username: ${email} and pass: ${password}`);

        this.getLoginField().type(email)
        this.getPasswordField().type(password)
        this.getSubmitButton().click()
    }

}
export default new LoginPage();


/*
мой
class Adress {
    visit() {
        cy.log('Add adress');
        cy.visit('/address/create');
    }
    getCountryField() {
        return cy.get('input[placeholder="Please provide a country."]');
    }
    getNameField() {
        return cy.get('input[placeholder="Please provide a name."]');
    }
    getMobileField() {
        return cy.get('input[placeholder="Please provide a mobile number."]');
    }
    getZIPField() {
        return cy.get('input[placeholder="Please provide a ZIP code."]');
    }
    getAdressField() {
        return cy.get('#address');
    }
    getCityField() {
        return cy.get('[placeholder="Please provide a city."]');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]#submitButton');
    }


    submitAdressForm(CountryField) {
        cy.log(`Auth user with username: ${username} and pass: ${password}`);

        this.getCountryField().type(CountryField)
        this.getNameField().type(NameField)
        this.getMobileField().type(MobileField)
        this.getZIPField().type(ZIPField)
        this.getAdressField().type(AdressField)
        this.getCityField().type(CityField)
        this.getSubmitButton().click()
    }

}
export default new AdressPage();


user.email = faker.internet.email();
user.answer = faker.person.firstName();

CountryField = faker.location.country();
NameField = faker.internet.userName();
MobileField = faker.phone.number();
ZIPField = faker.location.zipCode();
AdressField = faker.location.streetAddress();
CityField = faker.location.city();
*/