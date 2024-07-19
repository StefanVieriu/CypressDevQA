// cypress/pages/showPass.js

class ShowPassPage {
    visit() {
      cy.visit('https://amprenta.at.assistcloud.services/');
    }
  
    clickConectButton() {
      cy.get('.button-conect').click();
      cy.url().should('contain', '/conectare');
    }
  
  
    typePassword(password) {
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(password);
    }
    clickShowPasswordIcon() {
      cy.get('.left-icon>svg').click();
    }

    checkPasswordFieldType(expectedType) {
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', expectedType);
    }
  }
  
  export default ShowPassPage;
  