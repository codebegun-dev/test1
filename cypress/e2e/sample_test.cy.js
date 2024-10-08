describe('HTML Page Test', () => {
    it('should display the correct title', () => {
        cy.visit('http://localhost:8080/index.html');  // Change this to your actual path or URL
        cy.title().should('eq', 'Hello');  // Change this to match your HTML title
    });

    it('should display an h1 tag with the correct text', () => {
        cy.get('h1').should('contain.text', 'hello codebegun');
    });
});
