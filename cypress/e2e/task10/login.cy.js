/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
import eCommands from '../../support/commands.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  const e = new eCommands();
  beforeEach(() => {
    loginPage.visit();
  })
  it('User login with valid data functionality ', function () {
    cy.fixture('userData').then((userData) => {
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      e.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
    });
  })
})