import Link from "next/link";
import Image from "next/image";
import React from "react";
import { parse } from "node-html-parser";

const getRandom = function <T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
};

const withHost = (path: string) => `https://gallerix.org${path}`;

const withHttps = (path: string) => `https:${path}`;

async function getDocument(url: string) {
  let response = await fetch(url);

  let html = await response.text();

  return parse(html);
}

async function getRandomPicture(): Promise<string> {
  let letters = ["_RUS", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  let randomLetter = getRandom(letters);

  let randomLetterUrl = `https://gallerix.org/storeroom/letter/${randomLetter}/`;

  let randomLetterDocument = await getDocument(randomLetterUrl);

  let artists = Array.from(
    randomLetterDocument.querySelectorAll('.sr-pntrs [href^="/storeroom/"]'),
  );

  let randomArtist = getRandom(artists);

  function isElement(qwer: unknown): asserts qwer is Element {
    if (qwer === null) {
      throw new Error("Failed picking a random artist");
    }
  }

  isElement(randomArtist);

  let artistUrl = withHost(
    randomArtist.getAttribute("href") ?? "NO ARTIST LINK!",
  );

  let randomArtistDocument = await getDocument(artistUrl);

  let thumbnailLinks = Array.from(
    randomArtistDocument.querySelectorAll(".pic .animsition-link"),
  );

  let randomThumbnail = getRandom(thumbnailLinks);
  isElement(randomThumbnail);

  let imageUrl = withHost(
    randomThumbnail.getAttribute("href") ?? "NO THUMBNAIL!",
  );

  let imageDocument = await getDocument(imageUrl);

  let jpegUrl =
    imageDocument?.querySelector("#xpic")?.getAttribute("src") ?? "NO LUCK";

  return jpegUrl;
}

async function getRandomPictures(num: number): Promise<Array<string>> {
  const results: Array<string> = [];
  for (let i = 0; i < num; i++) {
    // results.push(await getRandomPicture());
  }
  return results;
}

export default async function Page() {
  return (
    <div>
      <h1>Hello!</h1>
      <Image
        src="/vercel.svg"
        width={500}
        height={500}
        alt="Cool picture"
        data-test="picture"
      />

      <Link href={`/explore/abc-1234-def`} data-test="begin">
        Begin
      </Link>
    </div>
  );
}
