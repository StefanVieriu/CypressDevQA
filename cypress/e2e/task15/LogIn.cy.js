describe('Login API Test', function() {
    it('should successfully log in and validate the response', function() {
        const url = 'https://api.amprenta.at.assistcloud.services/api/v1/users/sign_in'; // Replace with your actual login URL
        const loginPayload = {
            email: 'name1@domain.com',
            password: '11111111'
        };
        cy.request({
            method: 'POST',
            url: url,
            body: loginPayload,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.be.oneOf([201, 202]);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('first_name');
            expect(response.body).to.have.property('last_name');
            expect(response.body).to.have.property('auth_token');
            expect(response.body.first_name).to.equal('da');
            expect(response.body.last_name).to.equal('da');
        });
    });
});
describe('Login API Test - Empty Payload', function() {
    it('should handle empty payload and validate response', function() {
        const url = 'https://api.amprenta.at.assistcloud.services/api/v1/users/sign_in';
        cy.request({
            method: 'POST',
            url: url,
            body: {}, 
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.be.oneOf([400, 401, 422]); 
            expect(response.headers['content-type']).to.include('application/json');
            if (Object.keys(response.body).length === 0) {
                expect(response.body).to.be.empty; 
            } else {
                expect(response.body).to.be.an('object'); 
                expect(response.body).to.have.property('error_msg');
                expect(response.body.error_msg).to.include('email is missing, password is missing');
            }
        });
    });
});

