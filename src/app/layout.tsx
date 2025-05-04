import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shifaeta Kadari Barshon | Software Engineer",
  description:
    "Portfolio of Shifaeta Kadari Barshon, a Full-Stack Software Engineer specializing in web development",
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo.svg" },
    ],
    shortcut: { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/images/logo.svg" },
  },
  manifest: "/manifest.json",
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
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
