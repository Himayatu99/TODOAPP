///<reference types='Cypress'/>

describe('Request command suite', () => {
  it('Get request', () => {
    cy.visit('http://localhost:3000')
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/todos',
      qs: { "id": 9774 }
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
    }).then(resp => {
      expect(resp.status).to.be.eq(201)
    })
  })

  it('Put request', () => {
    cy.request('PUT', 'http://localhost:8080/todos/5977', {
      "name": "work",
      "id": 5977,
      "isComplete": true
    })
  })
  it('Delete request', () => {
    cy.request('DELET', 'http://localhost:8080/todos/9766')
  })

  it('secured api', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/courses',
      auth: {
        bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXIzNDNAbWFpbC5jb20iLCJpYXQiOjE3MjM4Nzc1NjcsImV4cCI6MTcyMzg4MTE2Nywic3ViIjoiNiJ9.b_BMbeAtE50l3Sg3kVDXSxlPSteh5hWExHxGua-fRIc'
      }

    })
  })
})
