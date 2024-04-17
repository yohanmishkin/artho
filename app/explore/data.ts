import { parse } from 'node-html-parser';

function getRandom<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const withHost = (path: string) => `https://gallerix.org${path}`;

async function getDocument(url: string) {
  let response = await fetch(url);

  let html = await response.text();

  return parse(html);
}

export async function getRandomPicture(): Promise<string> {
  let letters = ['_RUS', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  let randomLetter = getRandom(letters);

  let randomLetterUrl = `https://gallerix.org/storeroom/letter/${randomLetter}/`;

  let randomLetterDocument = await getDocument(randomLetterUrl);

  let artists = Array.from(
    randomLetterDocument.querySelectorAll('.sr-pntrs [href^="/storeroom/"]'),
  );

  let randomArtist = getRandom(artists);

  function isElement(
    potentialArtist: unknown,
  ): asserts potentialArtist is Element {
    if (potentialArtist === null) {
      throw new Error('Failed picking a random artist');
    }
  }

  isElement(randomArtist);

  let artistUrl = withHost(
    randomArtist.getAttribute('href') ?? 'NO ARTIST LINK!',
  );

  let randomArtistDocument = await getDocument(artistUrl);

  let thumbnailLinks = Array.from(
    randomArtistDocument.querySelectorAll('.pic .animsition-link'),
  );

  let randomThumbnail = getRandom(thumbnailLinks);
  isElement(randomThumbnail);

  let imageUrl = withHost(
    randomThumbnail.getAttribute('href') ?? 'NO THUMBNAIL!',
  );

  let imageDocument = await getDocument(imageUrl);

  let jpegUrl =
    imageDocument?.querySelector('#xpic')?.getAttribute('src') ?? 'NO LUCK';

  return jpegUrl;
}
