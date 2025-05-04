import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define basePath for use in metadata
const basePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";

export const metadata: Metadata = {
  title: "Shifaeta Kadari Barshon | Software Engineer",
  description:
    "Portfolio of Shifaeta Kadari Barshon, a Full-Stack Software Engineer specializing in web development",
  icons: {
    icon: [
      { url: `${basePath}/favicon/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/images/logo.svg` },
    ],
    shortcut: { url: `${basePath}/favicon/favicon.svg`, type: "image/svg+xml" },
    apple: { url: `${basePath}/images/logo.svg` },
  },
  // Manifest is now generated dynamically by /app/manifest.ts
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://barshono96.github.io/MyPortfolio"
      : "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Standard favicons */}
        <link
          rel="icon"
          href={`${basePath}/favicon/favicon.svg`}
          type="image/svg+xml"
        />
        <link
          rel="shortcut icon"
          href={`${basePath}/favicon/favicon.svg`}
          type="image/svg+xml"
        />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href={`${basePath}/images/logo.svg`} />

        {/* Web Manifest */}
        <link rel="manifest" href={`${basePath}/manifest.webmanifest`} />

        {/* Theme and MS color */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta
          name="msapplication-TileImage"
          content={`${basePath}/images/logo.svg`}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
