describe('Validate Airports Data for Flights', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/transportations?location=Vaslui';
    let savedAirports = [];
    before(function () {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            savedAirports = response.body; 
        });
    });
    it('should validate the number of airports', function () {
        cy.request('GET', endpoint).then((response) => {
            const currentAirports = response.body;
            expect(currentAirports.length).to.eq(savedAirports.length, 'Response should contain the correct number of airports');
        });
    });
    it('should validate airports for each location', function () {
        cy.request('GET', endpoint).then((response) => {
            const currentAirports = response.body;
            expect(currentAirports.length).to.eq(savedAirports.length, 'Response should contain the correct number of airports');
            const expectedIdRange = Array.from({ length: 91 }, (_, i) => i);
            expectedIdRange.forEach((expectedId) => {
                const foundInCurrent = currentAirports.find(item => item.id === expectedId);
                const foundInSaved = savedAirports.find(item => item.id === expectedId);
                expect(foundInCurrent).to.be.an('object', `Airport with ID: ${expectedId} should be present in current response`);
                expect(foundInSaved).to.be.an('object', `Airport with ID: ${expectedId} should be present in saved response`);
                expect(foundInCurrent.name).to.eq(foundInSaved.name, `Airport with ID: ${expectedId} should have the same name in both responses`);
            });
        });
    });
});
