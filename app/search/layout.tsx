import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Journeys to Ireland",
  description: "Search characters, decisions, sourced myth-busters, Irish practical information and learning guidance across Journeys to Ireland.",
};

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
