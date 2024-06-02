beforeEach("Testing invoke command", () => {
  cy.visit(Cypress.env("orangeHRM"))
})
let myArray = []
let username = ""
let password = ""

it("1.invoking username value", () => {
  cy.get('input[name="username"]')
    .invoke("attr", "placeholder")
    .should("eq", "Username")
  cy.get(".orangehrm-demo-credentials")
    .find("p")
    .first()
    .invoke("text")
    .then((text) => {
      myArray = text.split(":")
      username = myArray[1].trim()
    })
})

it("2.invoking password value", () => {
  cy.get(".orangehrm-demo-credentials")
    .find("p")
    .eq(1)
    .invoke("text")
    .then((text) => {
      myArray = text.split(":")
      password = myArray[1].trim()
    })
})

it("3.entering username and password in respective field then logging in", () => {
  cy.get('input[name="username"]')
    .invoke("attr", "placeholder")
    .should("eq", "Username")

  cy.get('[name="username"]').clear().type(username, { timeout: 7000 })

  cy.get('input[name="password"]')
    .invoke("attr", "placeholder")
    .should("eq", "Password")

  cy.get('[name="password"]').clear().type(password, { timeout: 7000 })

  cy.get('button[type="submit"]').click()
  cy.url().should("include", "/dashboard")
})
