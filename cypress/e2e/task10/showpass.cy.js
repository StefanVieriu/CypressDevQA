/// <reference types="cypress" />
import ShowPassPage from '../../pages/showpass.js';
describe('cypress test for the functionality of “show password icon POM', () => {
  const s = new ShowPassPage();
  beforeEach(() => {
        s.visit()
  })
      
  it('Toggle Password On/off functionality', () => {
    s.clickConectButton()
    s.typePassword('parola11')
    s.clickShowPasswordIcon();
    s.checkPasswordFieldType('password')
    s.clickShowPasswordIcon();
    s.checkPasswordFieldType('text')
    })
})
