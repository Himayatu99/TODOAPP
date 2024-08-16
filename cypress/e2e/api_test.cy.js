///<reference types='Cypress'/>

describe('Request command suite', () => {
  it('Get request', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/todos',
      qs: { "id": 5977 }
    })
      .then(response => {
        // cy.log(response.body[0].name)
        expect(response.status).to.be.eq(200)
        expect(response.body[0].name).to.be.eq('Home')
      })
  })
  it('Post request', () => {
    cy.request('POST', 'http://localhost:8080/todos', {
      "name": "hello",
      "isComplete": false
    })
  })
})
