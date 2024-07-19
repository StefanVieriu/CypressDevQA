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

    clickRegisterButton() {
      cy.get('.link').click();
      cy.url().should('contain', '/inregistrare');
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
     
    }

    checkLogout() {
      cy.get('.auth-user>svg').click();
      cy.url().should('contain', '/conectare');
    }
    verifyRegisterButtonColor() {
      cy.get('.auth-register-button-try>svg').should('have.css', 'color', 'rgb(34, 33, 34)');
    }
  
    verifyRegisterButtonBackgroundColor() {
      cy.get('.auth-register-button-try').should('have.css', 'background-color', 'rgb(252, 211, 81)');
    }
  
    verifySecondParagraphBackgroundColor() {
      cy.get('.second-paragraph > span').should('have.css', 'background-color', 'rgb(252, 211, 81)');
    }
    
    verifyinvalidcredentials(){
      cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
      cy.url().should('contain','/conectare')
    }

  
  }
  
  export default Login;
  