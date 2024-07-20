// cypress/pages/login.js

class Login {
    visit() {
      cy.visit('https://amprenta.at.assistcloud.services/');
    }
    
    clickButton(button, url = ' '){
      cy.get(button).click();
      cy.url().should('contain', url);
    }

    fillLoginForm(username = '', password = '') {
      if (username) {
        cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type(username);
      }
      if (password) {
        cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(password);
      }
    }

    checkLogout() {
      cy.get('.auth-user>svg').click();
      cy.url().should('contain', '/conectare');
    }

    verifyColor(zone,atribute,rgbcolor){
      cy.get(zone).should('have.css', atribute, rgbcolor);
    }

    verifyInvalidCredentials(){
      cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
      cy.url().should('contain','/conectare')
    }
  }
  
  export default Login;
  