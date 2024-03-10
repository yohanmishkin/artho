import Image from "next/image";

export default function Page() {
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
    </div>
  );
}
