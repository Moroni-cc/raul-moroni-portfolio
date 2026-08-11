import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add remote domains here if you keep hosting images externally,
    // e.g. { hostname: "lh3.googleusercontent.com" }.
    remotePatterns: [],
  },
};

export default nextConfig;
