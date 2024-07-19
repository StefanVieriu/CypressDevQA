// cypress/pages/login.js

class Login {
    visit() {
      cy.visit('https://amprenta.at.assistcloud.services/');
    }
  
    clickConectButton() {
      cy.get('.button-conect').click();
      cy.url().should('contain', '/conectare');
      cy.get('.first-paragraph').should('have.text', 'Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?');
    }

    enterUsername(username) {
      cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type(username);
    }
    enterPassword(password) {
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(password);
    }
  
    clickLoginButton() {
      cy.get('.auth-register-button-try').click();
      cy.url().should('contain', '/*');
    }

    checkLogout() {
      cy.get('.auth-user>svg').click();
      cy.url().should('contain', '/conectare');
    }
  }
  
  export default Login;
  