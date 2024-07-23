describe('Validate County Data', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/locations/counties';
    let savedCounties = [];
    let currentCounties = [];
    before(function () {
        cy.fixture('counties').then((data) => {
            savedCounties = data;
        });
    });
    beforeEach(function () {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            currentCounties = response.body;
        });
    });
    it('Validate number of counties', function () {
        const expectedNoCounties = savedCounties.length; 
        expect(currentCounties.length).to.eq(expectedNoCounties, 'Response should contain the correct number of counties');
    });
    it('Validate counties for each location', function () {
        savedCounties.forEach((expectedCounty) => {
            const foundInCurrent = currentCounties.find(item => item.id === expectedCounty.id);
            expect(foundInCurrent).to.be.an('object', `County with ID: ${expectedCounty.id} should be present in current response`);
            expect(foundInCurrent.name).to.eq(expectedCounty.name, `County with ID: ${expectedCounty.id} should have the same name in both responses`);
        });
    });
});
