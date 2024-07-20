/// <reference types="cypress" />

describe('Test the colors of the login/register form ', () => {
    beforeEach(() => {
       
          cy.visit('https://amprenta.at.assistcloud.services/')
    })

    it('Check Colors on Login Page', () => {

      cy.get('.button-conect').click()
      cy.url().should('contains','/conectare')
      
          cy.get('.auth-register-button-try>svg').should('have.css', 'color', 'rgb(34, 33, 34)');
          cy.get('.auth-register-button-try').should('have.css', 'background-color', 'rgb(252, 211, 81)');
          cy.get('.second-paragraph > span').should('have.css', 'background-color', 'rgb(252, 211, 81)');
    })
  
  })
  