/// <reference types="cypress" />

import RegistrationPage from '../../pages/registerPage';
describe(' Show password functionality on Register Page POM', () => {
  
  const r = new RegistrationPage();
  beforeEach(() => {
        r.visit()
  })
      
  it('Toggle Show Password On/off functionality', () => {
    cy.fixture('userData').then((userData) => {

    r.clickButton('.button-conect', '/conectare');
    r.clickButton('.link', '/inregistrare');
    r.fillRegistrationForm("","","",userData.registerUser.password)
    r.clickShowPass('text')
    r.clickShowPass('password')
    r.clickShowPass('text')

    })
  })
})
