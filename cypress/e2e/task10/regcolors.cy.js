/// <reference types="cypress" />
import Login from '../../pages/login.js';
describe('Cy test suite for user login POM', () => {
  const l = new Login();
  beforeEach(() => {
        l.visit();
  })
  it('User login with valid data functionality ', function ()  {
 
  l.clickButton('.button-conect', '/conectare');
  l.clickButton('.link', '/inregistrare');

  l.verifyColor('.auth-register-button-try>svg','color','rgb(34, 33, 34)')
  l.verifyColor('.auth-register-button-try', 'background-color','rgb(252, 211, 81)')
  l.verifyColor('.second-paragraph > span', 'background-color','rgb(252, 211, 81)')

  })
})
