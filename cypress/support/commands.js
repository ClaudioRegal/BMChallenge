const el = require("./elements").ELEMENTS;


Cypress.Commands.add('loginPage', (user, pass) => {
    cy.visit('/')
    cy.get(el.loginUser).type(user).should('have.value', user)
    cy.get(el.loginPass).type(pass, { log: false })
    cy.get(el.loginButton).click()

})

Cypress.Commands.add('selectFilter', (filterActive, filterSelect, newFilterSelect) => {
    cy.get(el.filterSearch).should('have.text', filterActive)
    cy.get(el.selectFilter).select(filterSelect)
    cy.get(el.filterSearch).should('have.text', newFilterSelect)

})