import Image from "next/image";

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
      .map((x, i) => ({
        id: createUUID(),
        src: `https://artho.org/${x}`,
      }));

  return await Promise.resolve(getPictures(10));
}

export default function Page({ params }: { params: RandomImage }) {
  console.log(params);
  return (
    <div>
      <p>Post: {params.id}</p>
      <Image
        src={params.src}
        width={500}
        height={500}
        alt="Cool picture"
        data-test="picture"
      />
    </div>
  );
}
