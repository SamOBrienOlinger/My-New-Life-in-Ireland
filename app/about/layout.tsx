import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Journeys to Ireland",
  description:
    "About the educational purpose, sources, creator, copyright and ownership of Journeys to Ireland.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
