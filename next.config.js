/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  // Ensure Turbopack resolves the correct root when multiple lockfiles exist
  turbopack: {
    root: "./",
  },
  output: "standalone",
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
