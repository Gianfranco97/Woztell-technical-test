describe("empty spec", () => {
  it("Basic data validations", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".ant-input").type("Darth Vader");

    cy.get(".ant-btn").click();

    const card = cy.get(":nth-child(1) > .ant-col");
    card.contains("Darth Vader");
    card.click();

    cy.get(".ant-card-head-title").contains("Darth Vader");
  });
});
