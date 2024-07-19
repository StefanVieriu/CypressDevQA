// cypress/pages/registrationPage.js

class RegistrationPage {
    visit() {
      cy.visit('https://amprenta.at.assistcloud.services/');
    }
  
    clickConectButton() {
        cy.get('.button-conect').click();
        cy.url().should('contain', '/conectare');
        cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?');
      }
  
    clickRegisterButton() {
      cy.get('.link').click();
      cy.url().should('contain', '/inregistrare');
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?');
    }
    clickRegisterButtonR() {
        cy.get('.link').click();
        cy.url().should('contain', '/conectare');
        cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?');
      }
  

    fillRegistrationForm(firstName, lastName, email, password) {
      cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type(firstName);
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(lastName);
      cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type(email);
      cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type(password);
    }
  
  
  

  }
  
  export default RegistrationPage;
  