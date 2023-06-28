import { faker } from '@faker-js/faker'

let comment = faker.lorem.sentence();

it('LoginTest1', () => {
    cy.log('Feedback');
    cy.visit('/search');
    cy.get('.close-dialog').click();
    cy.get('button[aria-label="Open Sidenav"]').click();
    cy.get('a[routerlink="/contact"][aria-label="Go to contact us page"]').click();
    cy.get('#comment').type(comment);
    cy.get('#rating').type('3');

      cy.get('#captcha').then((captchaElement) => {
        const captchaText = captchaElement.text();
        cy.log(captchaText);
        const captchaResult = eval(captchaText.replace(/\s/g, ''));
        const captchaResultString = captchaResult.toString();
        cy.get('#captchaControl').type(captchaResultString);
        cy.get('#submitButton').click();
        cy.get('.mat-simple-snack-bar-content').should('contain', 'Thank you for your feedback');
      });
    })

    





/*
   cy.get('#captcha').then((captchaElement) => {
    const captchaText = captchaElement.text();
       const mathProblem = captchaText.match(/What is (.*)\?/)[1];
      const result = eval(mathProblem);
      cy.get('#captchaControl').type(result);
  });
      cy.get('#captcha').should('exist').then((captchaElement) => {
        cy.wrap(captchaElement).invoke('text').then((captchaText) => {
          const mathProblem = captchaText.match(/What is (.*)\?/)[1];
          const result = eval(mathProblem);
          cy.get('#captchaControl').type(result);
        });
      });

          cy.get('#captcha').invoke('text').then((captchaText) => {
        const mathProblem = captchaText.match(/What is (.*)\?/)?.[1];
        const result = eval(mathProblem) || 0;
        cy.get('#captchaControl').type(result.toString());
      });
  
      cy.get('#captcha').invoke('text').then((captchaText) => {
        const getCaptchaControl = () => cy.get('#captchaControl');
      
        const solveCaptcha = () => {
          getCaptchaControl().then(($captchaControl) => {
            const currentValue = $captchaControl.val();
      
            // Generate a new math problem
            const mathProblem = captchaText.match(/What is (.*)\?/)?.[1];
            const result = eval(mathProblem) || 0;
      
            // Enter the new solution in the captchaControl field
            getCaptchaControl().clear().type(result.toString()).trigger('input').then(() => {
              if (currentValue !== result.toString()) {
                // Solve the captcha recursively if the solution is incorrect
                solveCaptcha();
              } else {
                cy.get('#submitButton').click();
              }
            });
          });
        };
      
        solveCaptcha();
      });
      
  
  
  
  
  
  
  
  */



