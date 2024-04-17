'use client';

import Image from 'next/image';
import React from 'react';
import Container from './container';

export default function Page() {
  return (
    <Container>
      {({ isLoading, initialUrls }) => {
        if (isLoading) {
          return <h1>LOADIN</h1>;
        }

        return (
          <>
            <h1>Hello!</h1>
            <Image
              src={initialUrls.mainImage}
              width={500}
              height={500}
              alt="Cool picture"
              data-test="main-picture"
            />
            <Image
              src={initialUrls.nextImage}
              width={500}
              height={500}
              alt="Next thing"
              data-test="next-picture"
            />
            <Image
              src={initialUrls.upcomingImage}
              width={500}
              height={500}
              alt="Upcoming thing"
              data-test="upcoming-picture"
            />
          </>
        );
      }}
    </Container>
  );
}
