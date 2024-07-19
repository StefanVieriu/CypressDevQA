/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })
  it('User login with valid data functionality ', function ()  {
 
   loginPage.clickConectButton();
   loginPage.clickRegisterButton();
   loginPage.verifyRegisterButtonBackgroundColor();
   loginPage.verifyRegisterButtonColor();
   loginPage.verifySecondParagraphBackgroundColor();
  
  })
})
