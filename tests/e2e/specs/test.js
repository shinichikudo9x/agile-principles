// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('button').each(function(el){
      cy.wrap(el).click()
      cy.wait(1000)
    })
  })
})
