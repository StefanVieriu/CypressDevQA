class CalculeazaPage {
    visit() {
      cy.visit('https://amprenta.at.assistcloud.services/');
    }
  
    clickCalculeazaButton() {
      cy.get(':nth-child(1) > .button-try').click();
    }
  
    clickAnotherButton() {
      cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(2) > .button-try').click();
    }
  
    clickTryButton() {
      cy.get('.button-try').click();
    }
  
    selectFuelType(index) {
      cy.get('select[name="fuel_type"]').select(index);
    }
  
    clickDownArrow() {
      cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.visible').click();
    }
  
    clickUpArrow() {
      cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl').should('be.visible').click();
    }
  
    enterTotalKm(value) {
      cy.get('#total_km').type(value);
    }
  
    enterFuelConsumption(value) {
      cy.get('#fuel_consumption').type(value);
    }
  
    checkInput() {
      cy.get(':nth-child(2) > .checkbox > input').click();
    }
    checkInputCar() {
        cy.get('[style="margin-top: 32px;"] > :nth-child(2)').click()
        cy.get('div.container-checkmark:nth-child(1) > div:nth-child(2) > input:nth-child(1)').click()
      }
  
    enterElectricity(value) {
      cy.get('#electricity').type(value);
    }
  
    enterNaturalGas(value) {
      cy.get('#natural_gas').type(value);
    }
  
    enterWood(value) {
      cy.get('#wood').type(value);
    }
  
    clickFinalTryButton() {
      cy.get('.button-try').click();
    }
  
    clickModalButton() {
      cy.get('button.p-button.modal-section_modalSection_Button__rCHj8').click();
    }
  
    validateArrowsDisabled() {
      cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.disabled');
      cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl').should('be.disabled');
    }
  
    validateUpArrowEnabled() {
      cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl')
        .should('be.visible')
        .and('not.have.class', 'p-disabled')
        .click({ force: true });
    }
  }
  
  export default CalculeazaPage;
  