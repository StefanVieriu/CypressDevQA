/// <reference types="cypress" />

describe(' Tests for user  validation login', () => {
  beforeEach(() => {

        cy.visit('https://amprenta.at.assistcloud.services/')
  })

  it('Should login successfully with valid credentials', () => {
  
        cy.get('.button-conect').click()
        cy.url().should('contains','/conectare')
        cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('name1@domain.com');
        cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('11111111');
        cy.get('.auth-register-button-try').click();

        cy.get('.left-icon>svg').click()
        cy.url().should('contains','/*')

  })

  it('Should show error with invalid credentials', () => {
    cy.visit('https://amprenta.at.assistcloud.services/')
    cy.url().should('contains','/')
    cy.get('.button-conect').click()
    cy.url().should('contains','/conectare')

    cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('invaliduser@domain.com');
    cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('invalidpass');
    cy.get('.auth-register-button-try').click();
    cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
    cy.url().should('contains','/conectare')
})

it('Should show error when email is empty', () => {
 
  cy.visit('https://amprenta.at.assistcloud.services/')
  cy.url().should('contains','/')
  cy.get('.button-conect').click()
  cy.url().should('contains','/conectare')

  cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('11111111');

  cy.get('.auth-register-button-try').click();

  cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
  
  cy.url().should('contains','/conectare')

})

it('Should show error when passwword is empty', () => {
 
  cy.visit('https://amprenta.at.assistcloud.services/')
  cy.url().should('contains','/')
  cy.get('.button-conect').click()
  cy.url().should('contains','/conectare')
 
  cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('nume1@domain.com');
  cy.get('.auth-register-button-try').click();
  cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
  cy.url().should('contains','/conectare')
})


it('Should show error when both fields are empty', () => {
 
  cy.visit('https://amprenta.at.assistcloud.services/')
  cy.url().should('contains','/')
  cy.get('.button-conect').click()
  cy.url().should('contains','/conectare')
  cy.get('.auth-register-button-try').click();
  cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
  cy.url().should('contains','/conectare')

})
})
