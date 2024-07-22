class Login {
  visit() {
    cy.visit('https://amprenta.at.assistcloud.services/');
  }
  fillLoginForm(username = '', password = '') {
    if (username) {
      cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type(username);
    }
    if (password) {
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(password);
    }
  }
  checkLogOut() {
    cy.get('.auth-user>svg').click();
    cy.url().should('contain', '/conectare');
  }
  verifyInvalidCredentials() {
    cy.get('.error-wrapper > span').should('contain', 'Adresa de email sau parola nu este corecta');
    cy.url().should('contain', '/conectare')
  }
  checkElementShow(selector, visbility) {
    cy.get(selector).should(visbility)
  }
}
export default Login;