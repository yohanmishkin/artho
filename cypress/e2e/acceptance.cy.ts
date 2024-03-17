export {};

it('displays an image and pre-fetches the next', () => {
  // cy.intercept('/_next/image?url**', {});

  let firstImage: string | null = null;
  let nextImage: string | null = null;

  cy.visit('/explore');

  cy.get(`[data-test="picture"]`)
    .should('have.attr', 'src')
    .should('match', /_next\/image\?url/)
    .as('firstImage');

  cy.get(`[data-test="next-picture"]`)
    .should('have.attr', 'src')
    .should('match', /_next\/image\?url/)
    .as('nextImage');

  cy.get(`[data-test="next-picture"]`).scrollIntoView();

  cy.get('@firstImage').then(() => {
    expect(firstImage).equal(nextImage);
  });
  // cy.get(`[data-test="picture"]`).should('have.attr', 'src', '@nextImage');

  // should fetch another picture

  // scroll

  // should fetch another picture
});
