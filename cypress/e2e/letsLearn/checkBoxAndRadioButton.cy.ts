beforeEach("Testing and one task", () => {
  cy.visit(Cypress.env("testingUrl"))
  cy.get("h2").contains("Checkboxes")
})

it("1.verifying-checkbox-is-checked", () => {
  cy.get('[type="checkbox"][value="red"]').check()
  cy.get('[type="checkbox"][value="red"]').should("be.checked")
})

it("2.verifying-checkbox-is-not-checked", () => {
  cy.get('[type="checkbox"][value="red"]').uncheck()
  cy.get('[type="checkbox"][value="red"]').should("be.not.checked")
})

it("3.verifying-radio-button-is-checked", () => {
  cy.get('[type="radio"][name="browser"]').first().check()
  cy.get('[type="radio"][name="browser"]').should("be.checked")
})

it("4.verifying-radio-button-is-not-checked", () => {
  cy.get('[type="radio"][name="browser"]').last().click()
  cy.get('[type="radio"][name="browser"]').last().should("be.checked")
  cy.get('[type="radio"][name="browser"]').first().should("be.not.checked")
})
