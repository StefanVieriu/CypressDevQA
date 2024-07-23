describe('Check the status code of the response', function() {
    it('should return a status code of 200', function() {
        const url = 'https://amprenta.at.assistcloud.services/';
        cy.request(url).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
