it("displays an image", () => {
  cy.visit("/explore");

  cy.get(`[data-test="picture"]`).should("have.attr", "src", "/vercel.svg");
});
