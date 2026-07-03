import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://nehamangla-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neha Mangla — Senior Full Stack Engineer",
    template: "%s | Neha Mangla",
  },
  description:
    "Senior Full Stack Engineer focused on React, TypeScript, REST APIs, Node.js, NestJS, Python backend APIs, enterprise SaaS, dashboards, calendar workflows, and tested product systems.",
  keywords: [
    "Neha Mangla",
    "Senior Full Stack Engineer",
    "Full Stack Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Python APIs",
    "REST APIs",
    "Frontend Engineer",
    "Backend APIs",
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
      "Full-stack engineer building React + TypeScript product experiences, REST APIs, backend workflows, dashboards, calendar systems, and tested SaaS features.",
    url: siteUrl,
    siteName: "Neha Mangla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Mangla — Senior Full Stack Engineer",
    description:
      "Full-stack engineer building React + TypeScript product experiences, REST APIs, backend workflows, dashboards, calendar systems, and tested SaaS features.",
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