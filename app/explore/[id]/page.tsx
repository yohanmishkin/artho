import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

type RandomImage = {
  id: string;
  src: string;
};

export async function generateStaticParams(): Promise<Array<RandomImage>> {
  const getPictures = (n: number) =>
    Array(n)
      .fill(null)
      .map((x, i) => `picture${i}`);

  const pictures = await Promise.resolve(getPictures(10));
  console.log(pictures);
  return pictures.map((x) => ({
    id: x,
    src: `https://artho.org/${x}`,
  }));
}

export default function Page({ params }: { params: RandomImage }) {
  console.log(params);
  return <p>Post: {params.id}</p>;
}
