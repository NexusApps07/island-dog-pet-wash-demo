import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This enables the static export
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support Next.js image optimization
  },
  /* config options here */
};

export default nextConfig;