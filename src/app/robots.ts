import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `https://barshono96.github.io${basePath}/sitemap.xml`,
  };
}
