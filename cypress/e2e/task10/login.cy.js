/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })

  it('User login with valid data functionality ', function ()  {
    cy.fixture('userData').then((userData) => {

    loginPage.clickButton('.button-conect', '/conectare');
    loginPage.fillLoginForm(userData.validUser.username,userData.validUser.password)
    loginPage.clickButton('.auth-register-button-try', '/*')
    
    });
  })
})
