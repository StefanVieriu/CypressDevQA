/// <reference types="cypress" />

describe('cypress test for the functionality of “show password icon', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://amprenta.at.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Check shown passowrd button', () => {
        //Click on the link to Despre noi page
    cy.get('.button-conect').click()
        //Check if the url is correct
    cy.url().should('contains','/conectare')
      // Check if you reach connect page

    cy.get('.link').click()
    cy.url().should('contains','/inregistrare')
    cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?')

      // fill the register

    cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('parola1')
   
    cy.get('.left-icon>svg').click()


     // Initially, the password input type should be 'password'
     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'password');
    
     // Click the show icon
     cy.get('.left-icon>svg').click();
     
     // After clicking, the password input type should be 'text'
     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'text');
     
     // Optionally, you can click again to toggle back to 'password'
     cy.get('.left-icon>svg').click();
     
     // The password input type should be 'password' again
     cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', 'password');
  

  })

})
