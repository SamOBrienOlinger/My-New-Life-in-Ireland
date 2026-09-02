import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | A New Life in Ireland",
  description:
    "About the educational purpose, sources, creator, copyright and ownership of A New Life in Ireland.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
