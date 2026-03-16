import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick Rodrigues — Fullstack Developer",
  description:
    "Fullstack Developer with 3+ years of experience in fintech and enterprise software. Based in Portugal, open to remote.",
  openGraph: {
    title: "Patrick Rodrigues — Fullstack Developer",
    description:
      "Building production-grade systems in fintech and enterprise software.",
    url: "https://patrickrodrigues.vercel.app",
    siteName: "Patrick Rodrigues",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
