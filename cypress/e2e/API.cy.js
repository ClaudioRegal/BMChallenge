///<reference types="cypress" />



describe('API test', () => {

  it.only('validateAPI', () => {


    cy.request({
      url: Cypress.env('apiUrl'),
      method: 'GET',
    }).then(response => {
      expect(response.status).to.eq(200);
      const electronics = response.body.filter(product => product.category === "electronics");
      electronics.forEach(product => {
        expect(product).to.have.property('category', 'electronics');
      });
      const electronicsCount = electronics.length;
      cy.log('Number of products in the category: ', 'electronics', electronicsCount);
      const highlyRatedElectronics = electronics.filter(product => product.rating && product.rating.rate > 4);
      const highlyRatedCount = highlyRatedElectronics.length;
      cy.log('Number of products with a rate greater than 4:', highlyRatedCount);
      
    })
  })
})