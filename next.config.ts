import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // GitHub Pages serves from /SaaS-Marketing-site/
  basePath: "/SaaS-Marketing-site",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
