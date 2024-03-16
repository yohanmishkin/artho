import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

type RandomImage = {
  id: string;
  src: string;
};

function createUUID() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

export async function generateStaticParams(): Promise<Array<RandomImage>> {
  const getPictures = (n: number) =>
    Array(n)
      .fill(null)
      .map((x, i) => createUUID());

  const pictures = await Promise.resolve(getPictures(10));

  return pictures.map((x) => ({
    id: x,
    src: `https://artho.org/${x}`,
  }));
}

export default function Page({ params }: { params: RandomImage }) {
  return <p>Post: {params.id}</p>;
}
