/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerPage.js';
describe('Test the colors of the login/register form', () => {
  const l = new RegistrationPage();
  beforeEach(() => {
        l.visit();
  })
  it('Check colors on registration page ', function ()  {
 
  l.clickButton('.button-conect', '/conectare');
  l.clickButton('.link', '/inregistrare');

  l.verifyColor('.auth-register-button-try>svg','color','rgb(34, 33, 34)')
  l.verifyColor('.auth-register-button-try', 'background-color','rgb(252, 211, 81)')
  l.verifyColor('.second-paragraph > span', 'background-color','rgb(252, 211, 81)')

  })
})
