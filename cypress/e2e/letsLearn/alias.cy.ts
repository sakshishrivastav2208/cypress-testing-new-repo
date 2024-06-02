beforeEach("creating alias before each test cases", () => {
  cy.visit("https://accounts.saucelabs.com/am/XUI/#login/")
  cy.get("form").find('[id="idToken1"]').as("username")
  cy.get("form").find('[id="idToken2"]').as("password")
  cy.get("form").find('[id="loginButton_0"]').as("login")
})

it("using username via alias", () => {
  cy.get("@username").type("abc")
})

it("using password via alias", () => {
  cy.get("@password").type("abc")
})

it("clicking button via alias", () => {
  cy.get("@login").click()
})
