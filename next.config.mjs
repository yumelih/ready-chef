/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
  },
};

export default nextConfig;
