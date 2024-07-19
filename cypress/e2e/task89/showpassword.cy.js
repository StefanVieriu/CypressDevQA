/// <reference types="cypress" />

describe('cypress test for the functionality of “show password icon', () => {
  beforeEach(() => {
      
        cy.visit('https://amprenta.at.assistcloud.services/')
  })
     
  it('Check shown passowrd button', () => {
       
    cy.get('.button-conect').click()
       
    cy.url().should('contains','/conectare')
     

    cy.get('.link').click()
    cy.url().should('contains','/inregistrare')
    cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')

    cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('parola1')
    cy.get('.left-icon>svg').click()

     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'password');
  
     cy.get('.left-icon>svg').click();
     
     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'text');

     cy.get('.left-icon>svg').click();

     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'password');

  })

})
