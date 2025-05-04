import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Shifaeta Kadari Barshon",
  description:
    "Learn more about Shifaeta Kadari Barshon's background, education, and experience as a software engineer.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
