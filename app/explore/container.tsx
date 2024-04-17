import { useEffect, useState } from 'react';
import { getRandomPicture } from './data';

export default function Container({ children }) {
  const [initialUrls, setInitialUrls] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setIsLoading(true);

      const [mainImage, nextImage, upcomingImage] = [
        await getRandomPicture(),
        await getRandomPicture(),
        await getRandomPicture(),
      ];

      if (!isCancelled) {
        setInitialUrls({
          mainImage,
          nextImage,
          upcomingImage,
        });
        setIsLoading(false);
      }
    };

    fetchData();

    return function cleanup() {
      isCancelled = true;
    };
  }, []);

  return children({
    isLoading,
    initialUrls,
  });
}
