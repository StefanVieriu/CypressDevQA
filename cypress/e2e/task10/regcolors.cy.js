/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerPage.js';
import eCommands from '../../support/commands.js';
describe('Test the colors of the login/register form', () => {
  const l = new RegistrationPage();
  const e = new eCommands();
  beforeEach(() => {
    l.visit();
  })
  it('Check colors on registration page ', function () {
    e.clickButtonAndVerifyURL('.button-conect', '/conectare');
    e.clickButtonAndVerifyURL('.link', '/inregistrare');
    l.verifyColor('.auth-register-button-try>svg', 'color', 'rgb(34, 33, 34)')
    l.verifyColor('.auth-register-button-try', 'background-color', 'rgb(252, 211, 81)')
    l.verifyColor('.second-paragraph > span', 'background-color', 'rgb(252, 211, 81)')
  })
})