import { faker } from '@faker-js/faker';

class AddressPage {
    visit() {
        cy.log('Open home page');
        cy.visit('/address/create');
    }
    getCountry() {
        return cy.get('[data-placeholder="Please provide a country."]');
    }
    getName() {
        return cy.get('[placeholder="Please provide a name."]');
    }
    getNumder() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    getZIP() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }
    getAddress() {
        return cy.get('#address');
    }
    getCity() {
        return cy.get('[placeholder="Please provide a city."]');
    }
    getSubmitButton() {
        return cy.get('[type="submit"]#submitButton');
    }
    getRadioButton() {
        return cy.get('#mat-radio-40');
    }
    getContinueButton() {
        return cy.get('button.mat-button.mat-primary');
    }

    submitAddressForm() {

        const CountryField = faker.location.country();
        const NameField = faker.internet.userName();
        const MobileField = faker.phone.number('50113####');
        const ZIPField = faker.phone.number('###-###');
        const AddressField = faker.location.streetAddress();
        const CityField = faker.location.city();

        this.getCountry().type(CountryField)
        this.getName({ timeout: 10000 }).type(NameField)
        this.getNumder().type(MobileField)
        this.getZIP().type(ZIPField)
        this.getAddress().type(AddressField)
        this.getCity().type(CityField)
        this.getSubmitButton().click()
        this.getRadioButton().click();
        this.getContinueButton().contains('Continue').click();
    }



}
export default new AddressPage();