describe('HTML Page Test', () => {
    it('should display the correct title', () => {
        cy.visit('http://localhost:8080/index.html');  // Adjust this to match your server setup
        cy.title().should('eq', 'Hello');  // Ensure this matches your HTML <title>
    });

    it('should display an h1 tag with the correct text', () => {
       cy.visit('http://localhost:8080/index.html');  // Adjust the path
        cy.log(cy.document().then((doc) => doc.documentElement.outerHTML));
        cy.get('h1').should('contain.text', 'hello codebegun');  // Increase the timeout
    });
});
