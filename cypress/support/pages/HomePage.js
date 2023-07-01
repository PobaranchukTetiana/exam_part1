class HomePage {
    visit() {
        cy.log('Open home page');
        cy.visit('/');
    }
    closeBanner() {
        return cy.get('.close-dialog');
    }
    dismissCookies() {
        return cy.get('welcomebanner_status', 'dismiss');
    }
    getAccountButton() {
        return cy.get('#navbarAccount');
    }
    getLoginButton() {
        return cy.get('#navbarLoginButton');
    }
    getHamburgerMenu() {
        return cy.get('button[aria-label="Open Sidenav"]');
    }
    getFeedbackTab() {
        return cy.get('a[routerlink="/contact"][aria-label="Go to contact us page"]');
    }
    getSearchButton() {
        return cy.get('[routerlink="/search"]');
    }
    getAddtoBasketButton() {
        return cy.get('button[aria-label="Add to Basket"]');
    }
    getOpenCartButton() {
        return cy.get('[aria-label="Show the shopping cart"]');
    }
    getSearch() {
        return cy.get('.mat-search_icon-search');
    }

    GetLoginPage() {

        this.visit();
        cy.setCookie('welcomebanner_status', 'dismiss');
        cy.reload();
        this.getAccountButton().click();
        this.getLoginButton().click();
    }

    FindAndAddProduct() {

        this.getSearchButton().click();

        let product = 'Apple Juice (1000ml)';
        cy.log(`Order ${product}`);
        this.getSearch().type(product, { enter: true });
        cy.contains('mat-card', 'Apple Juice (1000ml)').within(() => {
            this.getAddtoBasketButton().should('be.visible').click();
        });
        this.getOpenCartButton().click();
        cy.get('mat-cell.mat-column-product').should('contain', `${product}`);
    }








}
export default new HomePage();