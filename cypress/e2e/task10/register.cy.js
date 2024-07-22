/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerPage.js';
import eCommands from '../../support/commands.js';
describe('Test suite for registering a new user account POM', () => {
  const reg = new RegistrationPage();
  const e = new eCommands();
  beforeEach(() => {
    reg.visit()
  })
  it('Register Succesfully', () => {
    cy.fixture('userData').then((userData) => {
      const randomNum = Math.floor(Math.random() * 10000);
      const email = `user${randomNum}@${userData.registerUser.email}`;
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      reg.fillRegistrationForm(userData.registerUser.name, userData.registerUser.surname, email, userData.registerUser.password)
      e.clickButtonAndVerifyURL('.auth-register-button-try', '/conectare');
    });
  })
})