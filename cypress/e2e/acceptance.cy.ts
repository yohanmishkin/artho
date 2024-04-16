export {};

it('displays an image and pre-fetches the next', () => {
  cy.intercept('/_next/image?url**', {});

  cy.visit('/explore');

  // should get two different pictures

  // scroll to second picture

  // should fetch a third picture

  cy.get(`[data-test="picture"]`).invoke('attr', 'src').as('picture-1');
  cy.get(`[data-test="next-picture"]`).invoke('attr', 'src').as('picture-2');

  cy.get('@picture-1').then((picture1: unknown) => {
    cy.get('@picture-2').then((picture2: unknown) => {
      expect(decodeURIComponent(picture1 as string)).not.to.equal(
        decodeURIComponent(picture2 as string),
      );
    });
  });

  cy.get(`[data-test="next-picture"]`).scrollIntoView();

  cy.get(`[data-test="picture"]`).invoke('attr', 'src').as('picture-3');
  cy.get(`[data-test="next-picture"]`).invoke('attr', 'src').as('picture-4');

  cy.get('@picture-1').then((picture1: unknown) => {
    cy.get('@picture-3').then((picture3: unknown) => {
      expect(decodeURIComponent(picture1 as string)).to.equal(
        decodeURIComponent(picture3 as string),
      );
    });
  });

  // .should('have.attr', 'src')
  // .should('match', /_next\/image\?url/)
  // .then((image1) => {
  //   cy.get(`[data-test="next-picture"]`)
  //     .should('have.attr', 'src')
  //     .should('match', /_next\/image\?url/)
  //     .then((image2) => {
  //       expect(image2).not.equal(image1);
  //       //     cy.get(`[data-test="next-picture"]`)
  //       //       .scrollIntoView()
  //       //       .then(() => {
  //       //         cy.get(`[data-test="next-picture"]`)
  //       //           .should('have.attr', 'src')
  //       //           .should('match', /_next\/image\?url/)
  //       //           .then((image3) => {
  //       //             expect(image3).not.equal(image2);
  //       //           });
  //       //       });
  //       //   });
  //       // cy.get(`[data-test="picture"]`)
  //       //   .should('have.attr', 'src')
  //       //   .then((currentImage) => {
  //       //     debugger;
  //     });
  // });

  // cy.get('@firstImage').then(() => {
  // expect(firstImage).equal(nextImage);
  // });
});
