/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
describe('Check if stats page is available', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })
  it('Check if stats appear without being logged ', function ()  {

    loginPage.checkElementShow('.left-icon>svg','not.exist')
    loginPage.checkElementShow('[href="/statistici"]','not.exist')

  })
  it('Check if stats appear after login in  ', function ()  {
    cy.fixture('userData').then((userData) => {
      loginPage.checkElementShow('[href="/statistici"]','not.exist')
      loginPage.clickButton('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
      loginPage.clickButton('.auth-register-button-try', '/*')
      loginPage.clickButton('[href="/statistici"]', '/statistici');
      loginPage.checkLogOut();
      });
  })
  it('Check if stats appear dissapper after log out  ', function ()  {
    cy.fixture('userData').then((userData) => {
      loginPage.clickButton('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
      loginPage.clickButton('.auth-register-button-try', '/*')
      loginPage.checkLogOut();
      loginPage.checkElementShow('[href="/statistici"]','not.exist')
      });
  })
})
