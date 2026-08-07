import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoj Pasunoori — Aerospace Software Engineer",
  description:
    "Software engineer focused on aerospace guidance systems, rocket propulsion algorithms, and autonomous UAV software.",
  openGraph: {
    title: "Manoj Pasunoori — Aerospace Software Engineer",
    description:
      "Software for flight: guidance systems, propulsion control, and autonomous UAVs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
