describe('API Automation Tests', () => {
it('Validate GET users API', () => {
cy.request('https://reqres.in/api/users?page=2')
.then((response) => {
expect(response.status).to.eq(200)
expect(response.body.data).to.have.length.greaterThan(0)
})
})
})
