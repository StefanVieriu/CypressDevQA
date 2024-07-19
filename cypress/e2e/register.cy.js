/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://amprenta.at.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Navigate to Despe noi page', () => {
          //Click on the link to Despre noi page
      cy.get('.button-conect').click()
          //Check if the url is correct
      cy.url().should('contains','/conectare')
        // Check if you reach connect page
  
      cy.get('.link').click()
      cy.url().should('contains','/inregistrare')
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')
      const randomNum = Math.floor(Math.random() * 10000);
      const email = `user${randomNum}@example.com`;
      
        // fill the register
  
        cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('john')
        
        cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('wick')
        
        cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type(email)
  
        cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('parola11')
  
  
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')
            // Check if you reach connect page
      cy.get('.auth-register-button-try').click()
  
      cy.url().should('contains','/conectare')
    })

})
