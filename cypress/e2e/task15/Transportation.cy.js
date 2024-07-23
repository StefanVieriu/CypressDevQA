describe('Validate Transportation Data for Location Vaslui', function () {
    const endpoint = 'https://api.amprenta.at.assistcloud.services/api/v1/transportations?location=Vaslui';
    it('should have a status code of 201', function () {
        cy.request('POST', endpoint).then((response) => {
            expect(response.status).to.eq(201);
        });
    });
    it('should validate the response JSON format', function () {
        cy.request('POST', endpoint).then((response) => {
            const responseBody = response.body;
            const expectedStructure = {
                "cars_carbon_footprint": "number",
                "flights_carbon_footprint": "number",
                "public_transports_carbon_footprint": "number",
                "footprint_id": "number"
            };
            Object.keys(expectedStructure).forEach((key) => {
                expect(responseBody).to.have.property(key);
                expect(responseBody[key]).to.be.a(expectedStructure[key]);
            });
        });
    });
});
