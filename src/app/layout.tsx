import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://blackstario.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Muhammad Sadiq Raza — AI Developer",
  description:
    "AI developer building intelligent systems across machine learning, cybersecurity, and real-time data. Research Officer at PAF Cyber Command.",
  keywords: [
    "AI developer",
    "Machine Learning",
    "Cybersecurity",
    "Muhammad Sadiq Raza",
    "NLP",
    "LLM agents",
  ],
  authors: [{ name: "Muhammad Sadiq Raza" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Muhammad Sadiq Raza — AI Developer",
    description:
      "Building intelligent systems across machine learning, cybersecurity, and real-time data.",
    url: SITE,
    siteName: "Muhammad Sadiq Raza",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
