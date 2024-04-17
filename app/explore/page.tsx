import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { getRandomPicture } from './data';

export default async function Page() {
  const [mainImageURL, nextImageUrl, upcomingImageUrl] = [
    await getRandomPicture(),
    await getRandomPicture(),
    await getRandomPicture(),
  ];

  // const nextThing = useRef();

  // useEffect(() => {
  //   console.log(nextThing.current);
  // }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <Image
        src={mainImageURL}
        width={500}
        height={500}
        alt="Cool picture"
        data-test="main-picture"
      />
      <Image
        src={nextImageUrl}
        width={500}
        height={500}
        alt="Next thing"
        data-test="next-picture"
      />
      <Image
        src={upcomingImageUrl}
        width={500}
        height={500}
        alt="Upcoming thing"
        data-test="upcoming-picture"
      />
    </div>
  );
}
