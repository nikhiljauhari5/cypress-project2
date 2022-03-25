/// <refrence types="cypress"/>

it("assertion error test", function () {
  cy.visit("https://example.cypress.io/");
  cy.contains("get").click();

  cy.get("#query-btn", { timeout: 6000 }).should("contain", "Button123");
});

it.only("assertion test", function () {
  cy.visit("https://example.cypress.io/");
  cy.contains("get").click();

  cy.get("#query-btn")
    .should("contain", "Button")
    .should("have.class", "query-btn")
    .should("be.visible")
    .should("be.enabled");

  cy.get("#query-btn").invoke("attr", "id").should("equal", "query-btn");

  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn");

  // Explicit assertion

  //   expect
  //   expect(true).to.be.false;
  //   	If they fails it will shows in logs and if they pass they will not show up logs

  expect(true).to.be.true;
  let name = "Cypress";
  expect(name).to.be.equal("Cypress");

  //  assert
  // assert.equal(4, 5, "Not Equal");  Error assert

  assert.equal(4, 4, "Not Equal");

  // assert.strictEqual(4, "4", "Not strictly equal");  Error assert

  assert.strictEqual(4, 4, "Not strictly equal");
});
