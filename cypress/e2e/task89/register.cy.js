/// <reference types="cypress" />

describe('Cypress test suite for user login ', () => {
  beforeEach(() => {
        
        cy.visit('https://amprenta.at.assistcloud.services/')
  })

  it('Register with valid data', () => {
         
      cy.get('.button-conect').click()
      cy.url().should('contains','/conectare')
      cy.get('.link').click()
      cy.url().should('contains','/inregistrare')
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')
      const randomNum = Math.floor(Math.random() * 10000);
      const email = `user${randomNum}@example.com`;

        cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('john')
        
        cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('wick')
        
        cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type(email)
  
        cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('parola11')
  
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')
         
      cy.get('.auth-register-button-try').click()
  
      cy.url().should('contains','/conectare')
    })

})
