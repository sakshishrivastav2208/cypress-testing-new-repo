beforeEach("Testing and one task", () => {
  cy.visit(Cypress.env("paraBankAppURl"))
  cy.contains("ParaBank")
})

it("1.assertion-of-url-(using-should-eq)", () => {
  cy.url().should("include", Cypress.env("paraBankAppURl"))
  cy.url().should("match", /\/parabank.*$/)
  cy.location("protocol").should("eq", "https:")
  cy.location("hostname").should("eq", "parabank.parasoft.com")
})

it("2.learn-should-have", () => {
  cy.get("#topPanel").find("p").should("have.text", "Experience the difference")
})

it("3.assertion-of-login-button-is-enabled-(should-be.enabled)", () => {
  cy.get("input[type=submit]").should("be.enabled")
})

it("4.assertion-of-functionality-of-link", () => {
  cy.get("ul").find("li").contains("About Us").click()
  cy.url().should("include", "about")
  cy.get("h1").contains("ParaSoft Demo Website")
})

it("5.assertion-of-validation-errors-(should-notincludetext)", () => {
  cy.get("input[type=submit]")
    .contains("Log In")
    .should("not.include.text", "sakshi")
  cy.get("input[type=submit]").contains("Log In").click()
  cy.contains("Please enter a username and password.")
})

it("6.assertion-of-validation-errors-(should-have.value)", () => {
  cy.get("a").contains("Register").click()
  cy.get("input[type=submit]")
    .contains("Register")
    .should("have.value", "Register")
  cy.get("input[type=submit]").contains("Register").click()
  cy.contains("First name is required.")
})

it("7.assertion-of-validating-length-of-list-(should-have.length)", () => {
  cy.get("ul.leftmenu").find("li").should("have.length", 6)
})

it("8.assertion-of-validating-list-not-be-empty(should-not.be.empty)", () => {
  cy.get("ul.button").find("li").should("not.be.empty")
})

it("9.assertion-of-validating-class-and-attribute(should-have.class)", () => {
  cy.get('input[name="username"]').should("have.class", "input")
  cy.get('input[name="password"]').should("have.attr", "type", "password")
})

it("10.assertion-of-validating-existance-of-element(should-exist)", () => {
  cy.get("form").should("exist")
  cy.get("form").should("be.visible")
  cy.get("a").contains("Forgot login info?").should("be.not.hidden")
})
