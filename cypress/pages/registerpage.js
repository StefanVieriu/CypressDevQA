class RegistrationPage {
  visit() {
    cy.visit('https://amprenta.at.assistcloud.services/');
  }
  fillRegistrationForm(firstname = '', lastname = '', email = '', password = '') {
    if (firstname) {
      cy.get(':nth-child(1) > .input-wrapper > .input-container > .input-field').type(firstname);
    }
    if (lastname) {
      cy.get(':nth-child(2) > .input-wrapper > .input-container > .input-field').type(lastname);
    }
    if (email) {
      cy.get(':nth-child(3) > .input-wrapper > .input-container > .input-field').type(email);
    }
    if (password) {
      cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').type(password);
    }
  }
  checkLogOut() {
    cy.get('.auth-user>svg').click();
    cy.url().should('contain', '/conectare');
  }
  clickShowPass(expectedType) {
    cy.get('.left-icon>svg').click();
    cy.get(':nth-child(4) > .input-wrapper > .input-container > .input-field').should('have.attr', 'type', expectedType);
  }
  checkPresentErrors(zone, visibility = '', errorMessage = '') {
    cy.get(zone).should(visibility).and('contain', errorMessage);
  }
  notExistError(zone) {
    cy.get(zone).should('not.exist')
  }
  verifyColor(zone, atribute, rgbcolor) {
    cy.get(zone).should('have.css', atribute, rgbcolor);
  }
}
export default RegistrationPage;