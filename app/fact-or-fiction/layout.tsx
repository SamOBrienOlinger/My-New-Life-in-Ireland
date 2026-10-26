import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fact or Fiction | Journeys to Ireland",
  description: "Evidence-based checks about migration, asylum, welfare, housing, employment and racism in Ireland, with original sources.",
};

export default function FactOrFictionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
