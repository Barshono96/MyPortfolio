import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

  return {
    name: "Shifaeta Kadari Barshon | Software Engineer",
    short_name: "Shifaeta's Portfolio",
    description:
      "Portfolio of Shifaeta Kadari Barshon, a Full-Stack Software Engineer specializing in web development",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#121212",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: `${basePath}/images/logo.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: `${basePath}/favicon/favicon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
