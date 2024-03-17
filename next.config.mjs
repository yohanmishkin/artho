/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gallerix.asia",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
