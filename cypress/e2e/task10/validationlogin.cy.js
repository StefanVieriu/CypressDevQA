/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })
  it('Should login successfully with valid credentials', () => {
    cy.fixture('userData').then((userData) => {
        loginPage.clickConectButton()
        loginPage.enterUsername(userData.validUser.username);
        loginPage.enterPassword(userData.validUser.password);
        loginPage.clickLoginButton()
        loginPage.checkLogout();
      });
  })

  it('Should show error with invalid credentials', () => {
    cy.fixture('userData').then((userData) => {
    loginPage.visit();
    loginPage.clickConectButton();
    loginPage.enterUsername(userData.invalidUser.username);
    loginPage.enterPassword(userData.invalidUser.password);
    loginPage.clickLoginButton();
    loginPage.verifyinvalidcredentials();
  });
})

it('Should show error when email is empty', () => {
  cy.fixture('userData').then((userData) => {
  loginPage.visit();
  loginPage.clickConectButton();
  loginPage.enterPassword(userData.invalidUser.password);
  loginPage.clickLoginButton();
  loginPage.verifyinvalidcredentials();
});
})

it('Should show error when passwword is empty', () => {
  cy.fixture('userData').then((userData) => {
    loginPage.visit();
    loginPage.clickConectButton();
    loginPage.enterPassword(userData.invalidUser.username);
    loginPage.clickLoginButton();
    loginPage.verifyinvalidcredentials();
  });
})


it('Should show error when both fields are empty', () => {
  loginPage.visit();
  loginPage.clickConectButton();
  loginPage.clickLoginButton();
  loginPage.verifyinvalidcredentials();
})
})
