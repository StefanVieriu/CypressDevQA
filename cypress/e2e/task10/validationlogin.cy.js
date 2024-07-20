/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })
  it('Should login successfully with valid credentials', () => {
    cy.fixture('userData').then((userData) => {
      loginPage.clickButton('.button-conect', '/conectare');
      loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
      loginPage.clickButton('.auth-register-button-try', '/*')
      })
  })

  it('Should show error with invalid credentials', () => {
    cy.fixture('userData').then((userData) => {
    loginPage.visit();
    loginPage.clickButton('.button-conect', '/conectare')
    loginPage.fillLoginForm(userData.invalidUser.email,userData.invalidUser.password)
    loginPage.clickButton('.auth-register-button-try','')
    loginPage.verifyInvalidCredentials();
  });
})

it('Should show error when email is empty', () => {
  cy.fixture('userData').then((userData) => {
  loginPage.visit();
  loginPage.clickButton('.button-conect', '/conectare')
  loginPage.fillLoginForm('',userData.validUser.password)
  loginPage.clickButton('.auth-register-button-try','')
  loginPage.verifyInvalidCredentials();
});
})

it('Should show error when passwword is empty', () => {
  cy.fixture('userData').then((userData) => {
    loginPage.visit();
    loginPage.clickButton('.button-conect', '/conectare')
    loginPage.fillLoginForm(userData.validUser.email,'')
    loginPage.clickButton('.auth-register-button-try','')
    loginPage.verifyInvalidCredentials();
  });
})


it('Should show error when both fields are empty', () => {
    loginPage.visit();
    loginPage.clickButton('.button-conect', '/conectare')
    loginPage.clickButton('.auth-register-button-try','')
    loginPage.verifyInvalidCredentials();
})
})
