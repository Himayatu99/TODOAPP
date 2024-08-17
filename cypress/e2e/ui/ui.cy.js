///<reference types='Cypress'/>

describe('Todo Ui testing', () => {
      beforeEach(() => {
            cy.visit('/')
      })
      it('Should add new todo correctly', () => {
            cy.addNewTodo('First todo')

      })
      it('Should be able to toggle the status of a todo correctly', () => {
            cy.addNewTodo('Second todo')
            cy.get('.todo-checkbox').each(($el) => {
                  cy.wrap($el).check().should('be.checked')
            })

      })
      afterEach(() => {
            cy.get('.delete-item > a').each(($el) => {
                  cy.wrap($el).click({ force: true });
            });

      })

})
