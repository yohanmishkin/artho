export {};

it("displays an image", () => {
  cy.intercept("/_next/image?url**", {});

  cy.visit("/explore");

  cy.get(`[data-test="picture"]`)
    .should("have.attr", "src")
    .should("match", /_next\/image\?url/);

  // cy.get(`[data-test="begin"]`).click();

  // cy.location("href").should(
  //   "match",
  //   /explore\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
  // );

  // cy.get(`[data-test="next"]`).click();
});
