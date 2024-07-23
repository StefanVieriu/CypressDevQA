describe('Validate Airports Data for Flights', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/flights/airports';
    let savedAirports = [];
    let currentAirports = [];
    before(function () {
        cy.fixture('airports').then((data) => {
            savedAirports = data;
        });
    });
    beforeEach(function () {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            currentAirports = response.body;
        });
    });
    it('should validate the number of airports', function () {
        const expectedNumberOfAirports = savedAirports.length; 
        expect(currentAirports.length).to.eq(expectedNumberOfAirports, 'Response should contain the correct number of airports');
    });
    it('should validate airports for each location', function () {
        savedAirports.forEach((expectedAirport) => {
            const foundInCurrent = currentAirports.find(item => item.id === expectedAirport.id);
            expect(foundInCurrent).to.be.an('object', `Airport with ID: ${expectedAirport.id} should be present in current response`);
            expect(foundInCurrent.name).to.eq(expectedAirport.name, `Airport with ID: ${expectedAirport.id} should have the same name in both responses`);
        });
    });
});
