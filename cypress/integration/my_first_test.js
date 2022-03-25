/// <refrence types="cypress"/>

it.skip("google test more ways to write funtions", () => {});

it.skip("google test", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step By Step{enter}");
});

it.skip("google test global timeout in cypress.json", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step By Step{enter}");
});

it.skip("google test custom timeout", function () {
  cy.visit("https://google.com");
  cy.get(".gLFy", { timeout: 60000 }).type("Automation Step By Step{enter}");
});

it.skip("google test", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step By Step{enter}");
  cy.contains("Videos").click();
});

it.only("google test hard coded wait", function () {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step By Step{enter}");
  cy.wait(4000);
  cy.contains("Videos").click();
});
