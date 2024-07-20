/// <reference types="cypress" />

describe('Tests for validation registering form', () => {
  beforeEach(() => {
       
        cy.visit('https://amprenta.at.assistcloud.services/')
  })
      
        it('Check Required Fields', () => {
          cy.visit('https://amprenta.at.assistcloud.services/')
          cy.url().should('contains','/')
          cy.get('.button-conect').click()
          cy.get('.link').click()
          cy.url().should('contains','/inregistrare')
          cy.get('.auth-register-button-try').click();
          
          cy.get(':nth-child(1) > .input-wrapper > .errorMessage').should('be.visible');
          cy.get(':nth-child(2) > .input-wrapper > .errorMessage').should('be.visible');
          cy.get(':nth-child(3) > .input-wrapper > .errorMessage').should('be.visible');
          cy.get(':nth-child(4) > .input-wrapper > .errorMessage').should('be.visible');
        })

it('Validate Email Format', () => {
  cy.visit('https://amprenta.at.assistcloud.services/')
  cy.url().should('contains','/')
 
  cy.get('.button-conect').click()
  cy.get('.link').click()
  cy.url().should('contains','/inregistrare')

  cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type('invalid-email')

  cy.get('.auth-register-button-try').click();
 
  cy.get(':nth-child(3) > .input-wrapper > .errorMessage').should('be.visible').and('contain', 'Introdu o adresa de email corecta. E.g. example@email.com.');
})
  

it('Check Password Length and Complexity', () => {

  cy.visit('https://amprenta.at.assistcloud.services/')
  cy.url().should('contains','/')

  cy.get('.button-conect').click()
  cy.get('.link').click()
  cy.url().should('contains','/inregistrare')


  cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('short');
 
  cy.get('.auth-register-button-try').click();
 
  cy.get(':nth-child(4) > .input-wrapper > .errorMessage').should('be.visible').and('contain', 'Parola trebuie sa contina minim 8 caractere');

  cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('shortshort');

  cy.get('.auth-register-button-try').click();

  cy.get(':nth-child(4) > .input-wrapper > .errorMessage').should('not.exist')
 
});

it('Succesfully registered', () => {
 
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

it('Check for Duplicate Email Registration', () => {
  cy.get('.button-conect').click()
  cy.url().should('contains','/conectare')
  cy.get('.link').click()
  cy.url().should('contains','/inregistrare')
  const email = '';
  const firstName = 'John';
  const lastName = 'Doe';
  const password = 'Password123!'; 
  cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type('firstName');
  cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type('lastName');
  cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type('name1@domain.com');
  cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type('password1');
  cy.get('.auth-register-button-try').click();
  cy.get('.error-wrapper > span').should('be.visible').and('contain', 'Adresa de email a fost deja folosita');
})
});
