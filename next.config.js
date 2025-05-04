/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

// Add GitHub Pages settings only when not in development
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
if (isGithubActions) {
  nextConfig.basePath = "/MyPortfolio";
  nextConfig.assetPrefix = "/MyPortfolio";
  nextConfig.trailingSlash = true;
}

module.exports = nextConfig;
