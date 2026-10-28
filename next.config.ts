import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Concept uses the church's own photos straight from their current site.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bronvhlevendewoord.nl",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
