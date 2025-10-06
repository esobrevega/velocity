import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc.cloud.appwrite.io", // Appwrite CDN
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Appwrite CDN
      },
    ],
  },
};

export default nextConfig;
