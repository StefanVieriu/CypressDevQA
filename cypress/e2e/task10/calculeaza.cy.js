/// <reference types="cypress" />

import CalculeazaPage from '../../pages/calculeazapage';

describe('Calculeaza functionality', () => {
  const c = new CalculeazaPage();
  beforeEach(() => {
    c.visit();
  });

  it('Calculeaza test end-to-end test case', () => {
    c.clickCalculeazaButton();
    c.clickAnotherButton();
    c.clickTryButton();

    c.selectFuelType('1');
    c.clickDownArrow();

    c.selectFuelType('1');
    c.clickDownArrow();

    c.checkInputCar();
    c.clickDownArrow();

    c.enterTotalKm('1');
    c.clickDownArrow();

    c.selectFuelType('1');
    c.clickDownArrow();

    c.enterFuelConsumption('1');
    c.clickDownArrow();

    for(let i=0;i<3;i++){
        c.checkInput();
    }
    c.clickFinalTryButton();
    c.enterElectricity('1');
    c.clickDownArrow();

    c.enterNaturalGas('1');
    c.clickDownArrow();

    c.enterWood('1');
    c.clickDownArrow();

    c.clickFinalTryButton();
    for (let i = 0; i < 12; i++) {
      c.clickDownArrow();
    }
    c.clickFinalTryButton();
    c.clickModalButton();
  });
  it('Calculeaza bad scenario arrows', () => {
    c.clickCalculeazaButton();
    c.clickAnotherButton();
    c.clickTryButton();
    c.validateArrowsDisabled();
    
    c.selectFuelType('0');
    c.clickDownArrow();

    c.selectFuelType('1');
    c.clickDownArrow();

    c.validateUpArrowEnabled();
    c.clickDownArrow();
  });
});
