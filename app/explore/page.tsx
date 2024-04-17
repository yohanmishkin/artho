import Image from 'next/image';
import React from 'react';
import { getRandomPicture } from './data';

export default async function Page() {
  const [imageUrl, nextImageUrl] = [
    await getRandomPicture(),
    await getRandomPicture(),
  ];

  return (
    <div>
      <h1>Hello!</h1>
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt="Cool picture"
        data-test="main-picture"
      />
      <Image
        src={nextImageUrl}
        width={500}
        height={500}
        alt="Cool picture"
        data-test="next-picture"
      />
    </div>
  );
}
