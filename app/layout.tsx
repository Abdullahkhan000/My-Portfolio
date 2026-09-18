import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { portfolioLinks } from "@/data/portfolio";
import "@fontsource-variable/bitter";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/nanum-myeongjo/400.css";
import "@fontsource/nanum-myeongjo/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioLinks.siteUrl),
  title: "Abdullah Ibrahim — Python, Django & AI Developer",
  description: "Portfolio of Abdullah Ibrahim, a backend-focused Python and Django developer building APIs, AI integrations, automation, and digital media workflows.",
  applicationName: "Abdullah Ibrahim Portfolio",
  authors: [{ name: "Abdullah Ibrahim" }],
  creator: "Abdullah Ibrahim",
  keywords: ["Abdullah Ibrahim", "Python developer", "Django developer", "API developer", "AI integration", "automation"],
  openGraph: {
    title: "Abdullah Ibrahim — Python, Django & AI Developer",
    description: "Serious digital products built with Python, Django, APIs, AI, and automation.",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Abdullah Ibrahim — Python, Django and AI Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Ibrahim — Python, Django & AI Developer",
    description: "Serious digital products built with Python, Django, APIs, AI, and automation.",
    images: ["/og-image.svg"],
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
