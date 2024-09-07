///<reference types="cypress" />

context('register', () => {

    let username = Cypress.env('username')
    let password = Cypress.env('password')

    beforeEach(() => {

        cy.loginPage(username,password)
    })

    it('sort by name', () => {

        const filterAZ = 'Name (A to Z)'
        const filterZA = 'Name (Z to A)'
        cy.selectFilter(filterAZ, 'za', filterZA)

    })

})

