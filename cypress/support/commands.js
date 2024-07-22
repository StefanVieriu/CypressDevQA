class eCommands {
    clickButtonAndVerifyURL(button, url = ' ') {
        cy.get(button).click();
        cy.url().should('contain', url);
    }
    clickButton(button) {
        cy.get(button).click();
    }
}
export default eCommands;