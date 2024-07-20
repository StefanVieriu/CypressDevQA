/// <reference types="cypress" />
import RegistrationPage from '../../pages/registerPage.js';
describe('Test suite for registering a new user account POM', () => {
  const reg = new RegistrationPage();
  beforeEach(() => {
        reg.visit()
  })
        
  it('Register Succesfully', () => {
    cy.fixture('userData').then((userData) => {

    const randomNum = Math.floor(Math.random() * 10000);
    const email = `user${randomNum}@${userData.registerUser.email}`;  
    
    reg.clickButton('.button-conect', '/conectare');
    reg.clickButton('.link', '/inregistrare');
    reg.fillRegistrationForm(userData.registerUser.name,userData.registerUser.surname,email, userData.registerUser.password)
    reg.clickButton('.auth-register-button-try', '/conectare');
    });
    })
})
