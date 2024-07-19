/// <reference types="cypress" />

describe('cypress test suite for user login ', () => {
  beforeEach(() => {
        
        cy.visit('https://amprenta.at.assistcloud.services/')
  })
     
  it('user login with valid data functionality ', () => {
      
    cy.get('.button-conect').click()
     
    cy.url().should('contains','/conectare')

    cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')

    cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('name1@domain.com')

    cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('11111111')
    
    cy.get('.auth-register-button-try').click()

    cy.url().should('contains','/*')

    cy.get('.auth-user>svg').click()

    cy.url().should('contains','/conectare')
    
  })

})
