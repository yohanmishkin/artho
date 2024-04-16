export {};

it('displays an image and pre-fetches the next', () => {
  cy.intercept('/_next/image?url**', {});

  cy.visit('/explore');

  cy.get(`[data-test="picture"]`)
    .should('have.attr', 'src')
    .should('match', /_next\/image\?url/)
    .then((image1) => {
      cy.get(`[data-test="next-picture"]`)
        .should('have.attr', 'src')
        .should('match', /_next\/image\?url/)
        .then((image2) => {
          expect(image2).not.equal(image1);

          cy.get(`[data-test="next-picture"]`)
            .scrollIntoView()
            .then(() => {
              cy.get(`[data-test="next-picture"]`)
                .should('have.attr', 'src')
                .should('match', /_next\/image\?url/)
                .then((image3) => {
                  expect(image3).not.equal(image2);
                });
            });
        });

      // cy.get(`[data-test="picture"]`)
      //   .should('have.attr', 'src')
      //   .then((currentImage) => {
      //     debugger;
      //   });
    });

  // cy.get('@firstImage').then(() => {
  // expect(firstImage).equal(nextImage);
  // });
});
