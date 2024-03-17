export {};

it("displays an image and pre-fetches the next", () => {
  cy.intercept("/_next/image?url**", {});

  cy.visit("/explore");

  cy.get(`[data-test="picture"]`)
    .should("have.attr", "src")
    .should("match", /_next\/image\?url/);

  cy.get(`[data-test="next-picture"]`)
    .should("have.attr", "src")
    .should("match", /_next\/image\?url/);
});
