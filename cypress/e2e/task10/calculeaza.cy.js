/// <reference types="cypress" />

import CalculeazaPage from '../../pages/calculeazapage';

describe('Calculeaza functionality', () => {
  const c = new CalculeazaPage();
  beforeEach(() => {
    c.visit();
  });

  it('Calculeaza test end-to-end test case', () => {

    c.clickButton(':nth-child(1) > .button-try','')
    c.clickButton('[style="display: flex; flex-direction: column;"] > :nth-child(2) > .button-try','')
    c.clickButton('.button-try','')
   

    c.selectType('1');
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.selectType('1');
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')
    c.clickButton('div.container-checkmark:nth-child(1) > div:nth-child(2) > input:nth-child(1)','')
  
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.type('#total_km','1')
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')
   
    c.selectType('1');
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.type('#fuel_consumption','1')
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    for(let i=0;i<3;i++){
        c.clickButton(':nth-child(2) > .checkbox > input','');
    }
    c.clickButton('.button-try','')

    c.type('#electricity','1')
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.type('#natural_gas','1')
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.type('#wood','1')
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.clickButton('.button-try','')
    for (let i = 0; i < 12; i++) {
      c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')
    }
    c.clickButton('.button-try','')
    c.clickButton('button.p-button.modal-section_modalSection_Button__rCHj8','')
  
  });
  it('Calculeaza bad scenario arrows', () => {
    c.clickButton(':nth-child(1) > .button-try','')
    c.clickButton('[style="display: flex; flex-direction: column;"] > :nth-child(2) > .button-try','')
    c.clickButton('.button-try','')
    c.validateArrowsDisabled();
    c.selectType('1');
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')

    c.selectType('1');
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible')
    c.validateArrow('button.transport-question_transportQuestion_UpArrow__yOzkl', 'be.visible')
  
    c.clickQuestion('button.transport-question_transportQuestion_DownArrow__EF\\+9C', 'be.visible', 'p-disabled')
  });
});
