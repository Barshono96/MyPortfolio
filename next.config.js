/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/MyPortfolio",
  assetPrefix: "/MyPortfolio",
  trailingSlash: true,
};

module.exports = nextConfig;
