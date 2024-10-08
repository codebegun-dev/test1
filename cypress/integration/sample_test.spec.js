describe('HTML Page Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/index.html'); // Load the served HTML file
    });

    it('should have the correct title', () => {
        cy.title().should('eq', 'Test Page');
    });

    it('should display an h1 tag with text', () => {
        cy.get('h1#main-title').should('have.text', 'Welcome to CodeBegun');
    });

    it('should display a button with the correct label', () => {
        cy.get('button#learn-btn').should('have.text', 'Learn More');
    });
});
