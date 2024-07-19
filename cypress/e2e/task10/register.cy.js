/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerpage.js';
describe('cypress test suite for registering a new user account ', () => {
  const reg = new RegistrationPage();
  beforeEach(() => {
        reg.visit()
  })
        
  it('Register Succesfully', () => {
    cy.fixture('userData').then((userData) => {
    reg.clickConectButton()
    reg.clickRegisterButton()
    reg.fillRegistrationForm(userData.registerUser.name,userData.registerUser.surname,userData.registerUser.email, userData.registerUser.password)
    reg.clickRegisterButtonR()
    });
    })

})
