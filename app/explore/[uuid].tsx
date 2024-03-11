import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

import { useRouter } from "next/router";

type RandomImage = {
  id: string;
  src: string;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "abc-1234-def" } },
      { params: { id: "abc-2234-def" } },
      { params: { id: "abc-3234-def" } },
      { params: { id: "abc-4234-def" } },
      { params: { id: "abc-5234-def" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(args) {
  console.log(args);
  const randomImage = { id: "qwerhiqwerqwer", src: "ex.com" };
  return { props: { randomImage } };
}) satisfies GetStaticProps<{ randomImage: RandomImage }>;

export default function Page({
  randomImage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <p>Post: {randomImage.id}</p>;
}
