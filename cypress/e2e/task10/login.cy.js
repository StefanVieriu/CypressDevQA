/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })
  it('User login with valid data functionality ', function ()  {
    cy.fixture('userData').then((userData) => {
    loginPage.clickConectButton();
    loginPage.enterUsername(userData.validUser.username);
    loginPage.enterPassword(userData.validUser.password);
    loginPage.clickLoginButton();
    loginPage.checkLogout();
  });
  })
})
