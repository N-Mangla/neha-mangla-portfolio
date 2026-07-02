import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://neha-mangla-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neha Mangla — Senior Full Stack Engineer",
    template: "%s | Neha Mangla",
  },
  description:
    "Senior Full Stack Engineer focused on React, TypeScript, enterprise SaaS, product UI, calendar workflows, dashboards, API-driven experiences, and tested frontend systems.",
  keywords: [
    "Neha Mangla",
    "Senior Full Stack Engineer",
    "React",
    "TypeScript",
    "Frontend Engineer",
    "Product UI",
    "Enterprise SaaS",
    "Calendar UI",
    "Dashboard UI",
    "API-driven UI",
    "Frontend Testing",
  ],
  authors: [{ name: "Neha Mangla" }],
  creator: "Neha Mangla",
  publisher: "Neha Mangla",
  category: "Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Neha Mangla — Senior Full Stack Engineer",
    description:
      "React + TypeScript engineer building complex product interfaces, dashboards, calendar workflows, API-driven experiences, and tested frontend systems.",
    url: siteUrl,
    siteName: "Neha Mangla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Mangla — Senior Full Stack Engineer",
    description:
      "React + TypeScript engineer building complex product interfaces, dashboards, calendar workflows, API-driven experiences, and tested frontend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f8fb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}