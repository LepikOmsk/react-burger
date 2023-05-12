import { email, password } from "../fixtures/loginRequest.json";

describe("Login test", function () {
  beforeEach(function () {
    cy.intercept("POST", "api/auth/login", {
      fixture: "userResponse.json",
    }).as("loginRequest");
    cy.intercept("GET", "api/auth/user", {
      fixture: "loginResponse.json",
    });

    cy.visit("profile");

    cy.get("[name=email]").type(`${email}{enter}`);
    cy.get("[name=password]").type(`${password}{enter}`);
  });

  it("should login and show profile info", function () {
    cy.wait("@loginRequest")
      .its("request.body")
      .should("deep.equal", { email, password });
    cy.get("[name=email]").should("have.value", email);
  });

  it("should logout", function () {
    cy.get("button").contains("Выход").click();
    //! Разобраться почему без visit не проходит тест
    cy.visit("profile");
    cy.get("[class^=LoginPage_form]").should("exist");
  });
});
