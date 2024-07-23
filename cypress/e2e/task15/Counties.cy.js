describe('Validate County Data', function () {
    let savedCounties = [];
    before(function () {
        cy.request('GET', 'https://api.amprenta.at.assistcloud.services/api/v1/locations/counties')
            .then((response) => {
                expect(response.status).to.eq(200);
                savedCounties = response.body; 
            });
    });
    it('Validate number of counties', function () {
        const expectedNoCounties = 43;
        cy.wrap(savedCounties).should('have.length', expectedNoCounties);
    });
    it('Validate counties for each location', function () {
        cy.request('GET', 'https://api.amprenta.at.assistcloud.services/api/v1/locations/counties')
            .then((response) => {
                const currentResponse = response.body;
                expect(currentResponse.length).to.eq(savedCounties.length, 'Response should contain the correct number of counties');
                const expectedIdRange = Array.from({ length: 43 }, (_, i) => i);
                expectedIdRange.forEach((expectedId) => {
                    const foundInCurrent = currentResponse.find(item => item.id === expectedId);
                    const foundInSaved = savedCounties.find(item => item.id === expectedId);
                    expect(foundInCurrent).to.be.an('object', `County with ID: ${expectedId} should be present in current response`);
                    expect(foundInSaved).to.be.an('object', `County with ID: ${expectedId} should be present in saved response`);
                    expect(foundInCurrent.name).to.eq(foundInSaved.name, `County with ID: ${expectedId} should have the same name in both responses`);
                });
            });
    });
});
