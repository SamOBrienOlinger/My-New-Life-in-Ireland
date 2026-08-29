import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ireland Information Hub | My New Life in Ireland",
  description: "Trusted Irish sources for immigration, protection, work, study, housing, health, education and family life.",
};

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
