/// <reference types="cypress" />
import Login from '../../pages/loginPage.js';
describe('Check logOut functionality', () => {
  const loginPage = new Login();
  beforeEach(() => {
        loginPage.visit();
  })

  it('Check if logOut button works from Home page', function ()  {
    cy.fixture('userData').then((userData) => {

    loginPage.clickButton('.button-conect', '/conectare');
    loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
    loginPage.clickButton('.auth-register-button-try', '/*')
    loginPage.checkLogOut();
    });

  })


  it('Check if logOut button works from Donatii page', function ()  {
    cy.fixture('userData').then((userData) => {

    loginPage.clickButton('.button-conect', '/conectare');
    loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
    loginPage.clickButton('.auth-register-button-try', '/*')
    loginPage.clickButton('[href="/donatii"]','/donatii')
    loginPage.checkLogOut();
    });   
    })

    it('Check if logOut button works from Statistici Generale page', function ()  {
        cy.fixture('userData').then((userData) => {
        loginPage.clickButton('.button-conect', '/conectare');
        loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
        loginPage.clickButton('.auth-register-button-try', '/*')
        loginPage.clickButton('[href="/statistici-generale"]','/statistici-generale')
        loginPage.checkLogOut();
       
        });   
        })

        it('Check if logOut button works from Despre Noi page', function ()  {
            cy.fixture('userData').then((userData) => {
            loginPage.clickButton('.button-conect', '/conectare');
            loginPage.fillLoginForm(userData.validUser.email,userData.validUser.password)
            loginPage.clickButton('.auth-register-button-try', '/*')
            loginPage.clickButton('[href="/*"]','/*')
            loginPage.checkLogOut();
            });   
            })
})
