describe('Registration API Test - Successful Registration', function() {
    it('should successfully register with a random email and validate the response', function() {
        const url = 'https://api.amprenta.at.assistcloud.services/api/v1/users/sign_up';
        const randomEmail = `user_${Date.now()}@domain.com`;
        const registrationPayload = {
            email: randomEmail,
            password: '11111111',
            first_name: 'John',
            last_name: 'Doe'
        };
        cy.request({
            method: 'POST',
            url: url,
            body: registrationPayload,
            failOnStatusCode: false 
        }).then((response) => {
            cy.log('Status Code:', response.status);
            cy.log('Response Body:', JSON.stringify(response.body));
            console.log('Status Code:', response.status);
            console.log('Response Body:', response.body);
            expect(response.status).to.be.oneOf([201, 202]);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('first_name');
            expect(response.body).to.have.property('last_name');
            expect(response.body).to.have.property('auth_token');
            expect(response.body.first_name).to.equal('John');
            expect(response.body.last_name).to.equal('Doe');
        });
    });
});
describe('Registration API Test - Empty Payload', function() {
    it('should handle an empty payload and return an error', function() {
        const url = 'https://api.amprenta.at.assistcloud.services/api/v1/users/sign_up'; 
        cy.request({
            method: 'POST',
            url: url,
            body: {}, 
            failOnStatusCode: false 
        }).then((response) => {
            cy.log('Status Code:', response.status);
            cy.log('Response Body:', JSON.stringify(response.body));
            console.log('Status Code:', response.status);
            console.log('Response Body:', response.body);
            expect(response.status).to.be.oneOf([400, 422]);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('error_msg');
            expect(response.body.error_msg).to.include('first_name is missing, last_name is missing, email is missing, password is missing'); // Adjust based on actual API error message
        });
    });
});

