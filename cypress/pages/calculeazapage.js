class CalculeazaPage {
  visit() {
    cy.visit('https://amprenta.at.assistcloud.services/');
  }
  selectType(index) {
    cy.get('select[name="fuel_type"]').select(index);
  }
  type(selector, value) {
    cy.get(selector).type(value);
  }
  clickQuestion(selector, toggle) {
    cy.get(selector).should(toggle).click();
  }
  validateArrow(selector, toggle, state) {
    cy.get(selector).should(toggle).and('not.have.class', state).click({ force: true });
  }
  validateArrowsDisabled() {
    cy.get('button.transport-question_transportQuestion_DownArrow__EF\\+9C').should('be.disabled');
    cy.get('button.transport-question_transportQuestion_UpArrow__yOzkl').should('be.disabled');
  }
}
export default CalculeazaPage;