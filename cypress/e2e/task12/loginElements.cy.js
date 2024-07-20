/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
describe('Check if elements are visible on login page', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })

  it('Check elements out of the form ', function ()  {
    loginPage.clickButton('.button-conect', '/conectare');
    loginPage.checkElementShow('.first-container','be.visible')
    loginPage.checkElementShow('.first-container>svg','be.visible')
    loginPage.checkElementShow('.first-paragraph','be.visible')
    loginPage.checkElementShow('.second-paragraph','be.visible')
  })

  it('Check elements from login form ', function ()  {
   
    loginPage.clickButton('.button-conect', '/conectare');
    loginPage.checkElementShow('.second-container','be.visible')
    loginPage.checkElementShow(':nth-child(1) > .input-wrapper > .label-input','be.visible')
    loginPage.checkElementShow(':nth-child(1) > .input-wrapper > .input-container > .input-field','be.visible')
    loginPage.checkElementShow(':nth-child(1) > .input-wrapper > .input-container > .right-icon','be.visible')
    loginPage.checkElementShow(':nth-child(2) > .input-wrapper > .label-input','be.visible')
    loginPage.checkElementShow(':nth-child(2) > .input-wrapper > .input-container > .input-field','be.visible')
    loginPage.checkElementShow(':nth-child(2) > .input-wrapper > .input-container > .right-icon','be.visible')
    loginPage.checkElementShow(':nth-child(2) > .input-wrapper > .input-container > .left-icon','be.visible')
    loginPage.checkElementShow('.auth-register-button-try','be.visible')
    loginPage.checkElementShow('.auth-wrapper','be.visible')

  })
})
