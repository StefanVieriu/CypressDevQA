describe('Validate Locations for County Suceava', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/locations?county=Suceava';
    let expectedLocations = [];
    before(function () {
        cy.fixture('countysuceava').then((data) => {
            expectedLocations = data;
        });
    });
    it('should validate the locations data structure and values', function () {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            const locationsData = response.body;
            expect(locationsData).to.be.an('array');
            expect(locationsData.length).to.eq(412);
            locationsData.forEach((location) => {
                expect(location).to.be.an('object');
                expect(location).to.have.property('id');
                expect(location).to.have.property('name');
                expect(location.id).to.be.a('number');
                expect(location.name).to.be.a('string');
            });
            expectedLocations.forEach((expectedLocation) => {
                const foundLocation = locationsData.find(location => location.id === expectedLocation.id);
                expect(foundLocation).to.be.an('object', `Location with ID: ${expectedLocation.id} should be present in current response`);
                expect(foundLocation.name).to.eq(expectedLocation.name, `Location with ID: ${expectedLocation.id} should have the same name in both responses`);
            });
        });
    });
});
