import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A New Life in Ireland",
  description:
    "Choose a character and make decisions with them as they navigate employment permits, international protection, IPAS and rights in Ireland.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
