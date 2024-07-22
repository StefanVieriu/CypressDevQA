/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
import eCommands from '../../support/commands.js';
describe('Home Page Buttons Test', () => {
  const loginPage = new Login();
  const l = new eCommands();
  beforeEach(() => {
        loginPage.visit();
  })
  it('Check section menu buttons', function ()  {
    l.clickButtonAndVerifyURL('[href="/donatii"]','/donatii')
    l.clickButtonAndVerifyURL('[href="/statistici-generale"]','/statistici-generale')
    l.clickButtonAndVerifyURL('[href="/*"]','/*')
    loginPage.clickButton(':nth-child(1) > .button-try')
    loginPage.checkElementShow('.Modal_modalOverlay_Modal__JbBmx','be.visible')
    loginPage.visit();
    l.clickButtonAndVerifyURL('.sign-in','/inregistrare')
    loginPage.clickButton('.card > .button-try')
    loginPage.checkElementShow('.Modal_modalOverlay_Modal__JbBmx','be.visible')
    l.clickButtonAndVerifyURL('.button-conect', '/conectare');
  })
})