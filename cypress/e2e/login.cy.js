/// <refrence types="cypress"/>

it("Login test", function () {
  cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  cy.get("#txtUsername").type("Admin");
  cy.get("#txtPassword").type("admin123");
  cy.get("#btnLogin").click();
  cy.get("#menu_admin_viewAdminModule > b").click();
  //   cy.get("#menu_admin_UserManagement").find("li a").contains("Users").click();
  //   cy.get("select#menu_admin_UserManagement").should("have.text", "Users");
  //   cy.get("select#menu_admin_UserManagement").select("Users").click();
  cy.get("#btnAdd").click();
  //   find descendant elements
  cy.get("fieldset > p").find("#btnSave").click();
});
