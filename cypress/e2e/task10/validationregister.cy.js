import RegistrationPage from '../../pages/registerpage.js';
describe('cypress test suite for registering a new user account POM', () => {
  const reg = new RegistrationPage();
  beforeEach(() => {
        reg.visit()
  })
  it('Check Required Fields', () => {
    reg.visit()
    reg.clickConectButton()  
    reg.clickRegisterButton()
    reg.clickRegisterButtonR()
    reg.checkemptyfieldserror()
    })
it('Validate Email Format', () => {
  cy.fixture('userData').then((userData) => {
  reg.visit()
  reg.clickConectButton()  
  reg.clickRegisterButton()
  reg.fillemail(userData.invalidUser.badformatemail)
  reg.clickRegisterButtonR()
  reg.checkemailerror()
});
})
it('Check Password Length and Complexity', () => {
  cy.fixture('userData').then((userData) => {
  reg.visit()
  reg.clickConectButton()  
  reg.clickRegisterButton()
  reg.fillpassword(userData.invalidUser.shortpass)
  reg.clickRegisterButtonR()
  reg.checkifpasswordshort()
  reg.fillpassword(userData.invalidUser.password)
  reg.clickRegisterButtonR()
  reg.nopasserror()
  });
});
it('Succesfully registered', () => {
  cy.fixture('userData').then((userData) => {
  reg.visit()
  reg.clickConectButton()  
  reg.clickRegisterButton()
  const randomNum = Math.floor(Math.random() * 10000);
  const email = `user${randomNum}@example.com`;
  reg.fillRegistrationForm(userData.registerUser.name,userData.registerUser.surname, email, userData.registerUser.password)
  reg.clickRegisterButtonR()
  });
})
it('Check for Duplicate Email Registration', () => {
  cy.fixture('userData').then((userData) => {
  reg.visit()
  reg.clickConectButton()  
  reg.clickRegisterButton()
  reg.fillRegistrationForm(userData.registerUser.name,userData.registerUser.surname, userData.validUser.username, userData.registerUser.password)
  reg.clickRegisterButtonR()
  reg.checkduplicateerror()
    })
  })
});
