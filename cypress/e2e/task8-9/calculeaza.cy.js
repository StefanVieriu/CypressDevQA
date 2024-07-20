/// <reference types="cypress" />

describe('Calculeaza functionality', () => {
    beforeEach(() => {
         
          cy.visit('https://amprenta.at.assistcloud.services/')
    })

    it('Calculeaza test end-to-end test case', () => {
          
    
        cy.get(':nth-child(1) > .button-try').click()
        cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(2) > .button-try').click()
        cy.get('.button-try').click()

        cy.get('select[name="fuel_type"]').select('1');
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();    

        cy.get('select[name="fuel_type"]').select('1');
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();    

        cy.get('[style="margin-top: 32px;"] > :nth-child(2)').click()
        cy.get('div.container-checkmark:nth-child(1) > div:nth-child(2) > input:nth-child(1)').click()
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click()

        cy.get('#total_km').type('1')
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();    

        cy.get('select[name="fuel_type"]').select('1');
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();    

        cy.get('#fuel_consumption').type('1')
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click(); 

        cy.get(':nth-child(2) > .checkbox > input').click()
        cy.get(':nth-child(2) > .checkbox > input').click()
        cy.get(':nth-child(2) > .checkbox > input').click()
        cy.get('.button-try').click()

        cy.get('#electricity').type('1')
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();    

        cy.get('#natural_gas').type('1')
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click(); 

        cy.get('#wood').type('1')
        cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
        .should('be.visible').click();   

        cy.get('.button-try').click()

        for (let i = 0; i < 12; i++) {
            cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C')
              .should('be.visible').click(); 
          }

        cy.get('.button-try').click()
        cy.get('button.p-button.modal-section_modalSection_Button__rCHj8').click();
      
        })

        it('Calculeaza bad scenario arrows', () => {

            cy.get(':nth-child(1) > .button-try').click()
            cy.get('[style="display: flex; flex-direction: column;"] > :nth-child(2) > .button-try').click()
            cy.get('.button-try').click()
    
            cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.disabled');
            cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl').should('be.disabled') 

  
            cy.get('select[name="fuel_type"]').select('0');
            cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.visible').click();    
  
            cy.get('select[name="fuel_type"]').select('1');
            cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.visible').click();    
      
      
            cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl').should('be.visible')  .and('not.have.class', 'p-disabled')
            .click({ force: true })

            cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.visible').click();   
  
        })
  
  })
  