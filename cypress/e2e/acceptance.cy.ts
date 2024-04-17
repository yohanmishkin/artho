export {};

it('displays an image and pre-fetches the next', () => {
  cy.intercept('/_next/image?url**', { fixture: 'picture1.webp' });

  cy.visit('/explore');

  cy.get(`[data-test="main-picture"]`).invoke('attr', 'src').as('picture-1');
  cy.get(`[data-test="next-picture"]`).invoke('attr', 'src').as('picture-2');

  cy.get('@picture-1').then((picture1: unknown) => {
    cy.get('@picture-2').then((picture2: unknown) => {
      expect(picture1 as string).not.to.equal(picture2 as string);
    });
  });

  cy.get(`[data-test="next-picture"]`).scrollIntoView();

  cy.get(`[data-test="main-picture"]`)
    .invoke('attr', 'src')
    .then((newMainPicture) => {
      cy.get('@picture-2').should('equal', newMainPicture);
    });
});
