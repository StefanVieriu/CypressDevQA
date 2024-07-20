/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
describe('Home Page Buttons Test', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })

  it('Check section menu buttons', function ()  {
    
    loginPage.clickButton('[href="/donatii"]','/donatii')
    loginPage.clickButton('[href="/statistici-generale"]','/statistici-generale')
    loginPage.clickButton('[href="/*"]','/*')
  
    loginPage.clickButton(':nth-child(1) > .button-try','')
    loginPage.checkElementShow('.Modal_modalOverlay_Modal__JbBmx','be.visible')
    loginPage.visit();
    loginPage.clickButton('.sign-in','/inregistrare')

    loginPage.clickButton('.card > .button-try','')
    loginPage.checkElementShow('.Modal_modalOverlay_Modal__JbBmx','be.visible')

    loginPage.clickButton('.button-conect', '/conectare');

    
  })
})
