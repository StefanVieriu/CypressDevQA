describe('Validate Locations for County Suceava', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/locations?county=Suceava';
    it('should validate locations for county Suceava', function () {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            const locationsData = response.body;
            expect(locationsData).to.be.an('array');
            expect(locationsData.length).to.eq(412);
            locationsData.forEach((location, index) => {
                expect(location).to.be.an('object');
                expect(location).to.have.property('id');
                expect(location).to.have.property('name');
                expect(location.id).to.be.a('number'); 
                expect(location.name).to.be.a('string'); 
            });
            cy.log('Validated each location item for county Suceava.');
        });
    });
});
