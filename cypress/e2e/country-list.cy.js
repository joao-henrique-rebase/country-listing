describe("Country List", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the list of countries correctly", () => {
    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });

  it("should display country name, emoji, capital and languages", () => {
    cy.get("table tbody tr:first").within(() => {
      cy.get("td").eq(0).should("not.be.empty");
      cy.get("td").eq(1).should("not.be.empty");
      cy.get("td").eq(2).should("not.be.empty");
      cy.get("td").eq(3).should("not.be.empty");
    });
  });
});
