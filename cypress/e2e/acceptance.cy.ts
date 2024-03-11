it("displays an image", () => {
  cy.visit("/explore");

  cy.get(`[data-test="begin"]`).click();

  cy.location("href").should(
    "match",
    /explore\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
  );

  cy.get(`[data-test="picture"]`).should("have.attr", "src", "/vercel.svg");

  // cy.get(`[data-test="next"]`).click();
});
