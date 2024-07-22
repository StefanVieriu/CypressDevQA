/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
import eCommands from '../../support/commands.js';
describe('Check logOut functionality', () => {
  const loginPage = new Login();
  const l = new eCommands();
  beforeEach(() => {
    loginPage.visit();
  })
  it('Check if logOut button works from Home page', function () {
    cy.fixture('userData').then((userData) => {
      l.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      l.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
      loginPage.checkLogOut();
    });
  })
  it('Check if logOut button works from Donatii page', function () {
    cy.fixture('userData').then((userData) => {
      l.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      l.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
      l.clickButtonAndVerifyURL('[href="/donatii"]', '/donatii')
      loginPage.checkLogOut();
    });
  })
  it('Check if logOut button works from Statistici Generale page', function () {
    cy.fixture('userData').then((userData) => {
      l.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      l.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
      l.clickButtonAndVerifyURL('[href="/statistici-generale"]', '/statistici-generale')
      loginPage.checkLogOut();
    });
  })
  it('Check if logOut button works from Despre Noi page', function () {
    cy.fixture('userData').then((userData) => {
      l.clickButtonAndVerifyURL('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email, userData.validUser.password)
      l.clickButtonAndVerifyURL('.auth-register-button-try', '/*')
      l.clickButtonAndVerifyURL('[href="/*"]', '/*')
      loginPage.checkLogOut();
    });
  })
})