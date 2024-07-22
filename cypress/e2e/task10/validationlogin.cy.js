/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
import eCommands from '../../support/commands.js';
describe('Test suite for validation login POM', () => {
  const loginPage = new Login();
  const e = new eCommands();
  beforeEach(() => {
    loginPage.visit();
  })
  it('Should login successfully with valid credentials', () => {
    cy.fixture('userData').then((userData) => {
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      e.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
      loginPage.checkLogOut();
    })
  })
  it('Should show error with invalid credentials', () => {
    cy.fixture('userData').then((userData) => {
      loginPage.visit();
      e.clickButtonAndVerifyURL('.button-conect', '/conectare')
      loginPage.fillLoginForm(userData.invalidUser.email, userData.invalidUser.password)
      e.clickButton('.auth-register-button-try')
      loginPage.verifyInvalidCredentials();
    });
  })
  it('Should show error when email is empty', () => {
    cy.fixture('userData').then((userData) => {
      loginPage.visit();
      e.clickButtonAndVerifyURL('.button-conect', '/conectare')
      loginPage.fillLoginForm('', userData.validUser.password)
      e.clickButton('.auth-register-button-try')
      loginPage.verifyInvalidCredentials();
    });
  })
  it('Should show error when passwword is empty', () => {
    cy.fixture('userData').then((userData) => {
      loginPage.visit();
      e.clickButtonAndVerifyURL('.button-conect', '/conectare')
      loginPage.fillLoginForm(userData.validUser.email, '')
      e.clickButton('.auth-register-button-try')
      loginPage.verifyInvalidCredentials();
    });
  })
  it('Should show error when both fields are empty', () => {
    loginPage.visit();
    e.clickButtonAndVerifyURL('.button-conect', '/conectare')
    e.clickButton('.auth-register-button-try')
    loginPage.verifyInvalidCredentials();
  })
})