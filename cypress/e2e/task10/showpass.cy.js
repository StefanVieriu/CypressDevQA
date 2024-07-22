/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerPage';
import eCommands from '../../support/commands';
describe(' Show password functionality on Register Page POM', () => {
  const r = new RegistrationPage();
  const e = new eCommands();
  beforeEach(() => {
    r.visit()
  })
  it('Toggle Show Password On/off functionality', () => {
    cy.fixture('userData').then((userData) => {
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      r.fillRegistrationForm("", "", "", userData.registerUser.password)
      r.clickShowPass('text')
      r.clickShowPass('password')
      r.clickShowPass('text')
    })
  })
})