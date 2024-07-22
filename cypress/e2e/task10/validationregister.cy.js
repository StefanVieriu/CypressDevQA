import RegistrationPage from '../../pages/registerPage.js';
import eCommands from '../../support/commands.js';
describe('Test suite for validation registering POM', () => {
  const reg = new RegistrationPage();
  const e = new eCommands();
  beforeEach(() => {
    reg.visit()
  })
  it('Check Required Fields', () => {
    reg.visit()
    e.clickButtonAndVerifyURL('.button-conect', '/conectare');
    e.clickButtonAndVerifyURL('.link', '/inregistrare');
    e.clickButton('.auth-register-button-try')
    for (let i = 1; i < 4; i++) {
      reg.checkPresentErrors(`:nth-child(${i}) > .input-wrapper > .errorMessage`, 'be.visible', '')
    }
  })
  it('Validate Email Format', () => {
    cy.fixture('userData').then((userData) => {
      reg.visit()
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      reg.fillRegistrationForm('', '', userData.invalidUser.badFormatEmail)
      e.clickButton('.auth-register-button-try')
      reg.checkPresentErrors(':nth-child(3) > .input-wrapper > .errorMessage', 'be.visible', 'Introdu o adresa de email corecta. E.g. example@email.com.')
    });
  })
  it('Check Password Length and Complexity', () => {
    cy.fixture('userData').then((userData) => {
      reg.visit()
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      reg.fillRegistrationForm('', '', '', userData.invalidUser.shortPass)
      e.clickButton('.auth-register-button-try')
      reg.checkPresentErrors(':nth-child(4) > .input-wrapper > .errorMessage'
        , 'be.visible', 'Parola trebuie sa contina minim 8 caractere')
      reg.fillRegistrationForm('', '', '', userData.invalidUser.password)
      e.clickButton('.auth-register-button-try')
      reg.notExistError(':nth-child(4) > .input-wrapper > .errorMessage')
    });
  });
  it('Succesfully registered', () => {
    cy.fixture('userData').then((userData) => {
      const randomNum = Math.floor(Math.random() * 10000);
      const email = `user${randomNum}@${userData.registerUser.email}`;
      reg.visit()
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      reg.fillRegistrationForm(userData.registerUser.name, userData.registerUser.surname, email, userData.registerUser.password)
      e.clickButtonAndVerifyURL('.auth-register-button-try', '/conectare');
    });
  })
  it('Check for Duplicate Email Registration', () => {
    cy.fixture('userData').then((userData) => {
      reg.visit()
      e.clickButtonAndVerifyURL('.button-conect', '/conectare');
      e.clickButtonAndVerifyURL('.link', '/inregistrare');
      reg.fillRegistrationForm(userData.registerUser.name, userData.registerUser.surname, userData.validUser.email, userData.registerUser.password)
      e.clickButton('.auth-register-button-try')
      reg.checkPresentErrors('.error-wrapper > span'
        , 'be.visible', 'Adresa de email a fost deja folosita')
    })
  })
});