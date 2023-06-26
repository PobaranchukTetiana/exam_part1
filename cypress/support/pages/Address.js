class Address {
    visit() {
      cy.log('Add address');
      cy.visit('/address/create');
    }
  
    getCountryField() {
      return cy.get('#mat-input-28');
}
  
    getNameField() {
      return cy.get('[placeholder="Please provide a name."]');
    }
  
    getMobileField() {
      return cy.get('[placeholder="Please provide a mobile number."]');
    }
  
    getZIPField() {
      return cy.get('[placeholder="Please provide a ZIP code."]');
    }
  
    getAddressField() {
      return cy.get('#address');
    }
  
    getCityField() {
      return cy.get('[placeholder="Please provide a city."]');
    }
  
    getSubmitButton() {
      return cy.get('[type="submit"]#submitButton');
    }
  
    submitAddressForm(CountryField, NameField, MobileField, ZIPField, AddressField, CityField) {
      cy.log('User adress');
  
      this.getCountryField().type(CountryField);
      this.getNameField().type(NameField);
      this.getMobileField().type(MobileField);
      this.getZIPField().type(ZIPField);
      this.getAddressField().type(AddressField);
      this.getCityField().type(CityField);
      this.getSubmitButton().click();
    }
  }
  
  export default new Address();





