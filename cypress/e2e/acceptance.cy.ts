it("displays an image", () => {
  cy.visit("/");

  cy.get(`[data-test="picture"]`).should("have.attr", "src", "/vercel.svg");
});
