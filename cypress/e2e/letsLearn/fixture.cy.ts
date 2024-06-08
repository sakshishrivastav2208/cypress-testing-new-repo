import "cypress-file-upload"

beforeEach("visit url with fixture data", () => {
  cy.visit(Cypress.env("demo_registrationForm"))
})

it("entering first json object data through fixture", () => {
  cy.fixture("data").then((data) => {
    cy.get('[name="first_name"]').type(data[0].firstName)
    cy.get('[name="last_name"]').type(data[0].lastName)
    cy.get('[name="user_email"]').type(data[0].email)
    cy.get('[name="user_pass"]').type(data[0].password)
    cy.get('[name="phone_1665630575"]').type(data[0].phoneNumber)
    cy.get('[id="radio_1665631120_Male"]').check()
  })
})

it("entering second json object data through fixture", () => {
  cy.fixture("data").then((data) => {
    cy.get('[name="first_name"]').type(data[1].firstName)
    cy.get('[name="last_name"]').type(data[1].lastName)
    cy.get('[name="user_email"]').type(data[1].email)
    cy.get('[name="user_pass"]').type(data[1].password)
    cy.get('[name="phone_1665630575"]').type(data[1].phoneNumber)
    cy.get('[id="radio_1665631120_Male"]').check()
  })
})

it("entering third json object data through fixture", () => {
  cy.fixture("data").then((data) => {
    cy.get('[name="first_name"]').type(data[2].firstName)
    cy.get('[name="last_name"]').type(data[2].lastName)
    cy.get('[name="user_email"]').type(data[2].email)
    cy.get('[name="user_pass"]').type(data[2].password)
    cy.get('[name="phone_1665630575"]').type(data[2].phoneNumber)
    cy.get('[id="radio_1665631120_Male"]').check()
  })
})

it("uploading image from fixture", () => {
  cy.visit(Cypress.env("sponsershipRegistrationForm"))
  cy.fixture("company").then((com) => {
    cy.get('[id="input_box_1665981533"]').type(com.name)
    cy.get('[name="phone_1665981610"]').type(com.phone)
    cy.get('[name="user_email"]').type(com.email)
    cy.get('[name="user_pass"]').type(com.password)
    cy.get('input[type="file"]').attachFile(com.imagePath)
    cy.get("button").contains("Crop Picture").click()
  })
})
