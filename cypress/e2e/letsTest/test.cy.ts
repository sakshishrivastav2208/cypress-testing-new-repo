beforeEach("Testing and one task", () => {
    cy.visit(Cypress.env('appUrl'));
  cy.contains("OWASP Juice Shop")
})

it("test case 1-open website and change the overview tab link", () => {
  cy.get('.tab-link[id="overview-link"]')
    .click()
    .should("have.class", "tab-link current")
})

it("test case 2-open website and change the news tab link", () => {
  cy.get('a[href="#div-news"]').click().should("have.class", "tab-link current")
})

