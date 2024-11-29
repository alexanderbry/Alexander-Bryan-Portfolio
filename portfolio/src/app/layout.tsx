// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import favicon from "./favicon.ico";

// Initialize Inter font with optional subsets and weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Enhanced Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://alexanderbriyan.vercel.app"), // Replace with your actual domain
  title: {
    default: "Alexander Briyan | Fullstack Software Developer",
    template: "%s | Alexander Briyan",
  },
  description:
    "Transforming ideas into innovative web solutions. Fullstack developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Fullstack Developer",
    "Software Engineer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Alexander Briyan" }],
  creator: "Alexander Briyan",
  publisher: "Alexander Briyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexanderbriyan.vercel.app",
    title: "Alexander Briyan - Fullstack Software Developer",
    description:
      "Innovative fullstack developer creating cutting-edge web solutions.",
    siteName: "Alexander Briyan Portfolio",
    images: [
      {
        url: "/og-image.png", // Create an Open Graph image
        width: 1200,
        height: 630,
        alt: "Alexander Briyan Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alexanderbriyan.vercel.app",
  },
  icons: {
    icon: [
      { url: "./favicon.ico" },
      { url: "./favicon.ico", sizes: "16x16", type: "image/png" },
      { url: "./favicon.ico", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "./favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className="
          w-full 
          min-h-screen 
          overflow-x-hidden 
          antialiased 
          selection:bg-blue-500 
          selection:text-white
        "
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
