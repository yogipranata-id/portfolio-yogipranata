import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://yogipranata.dev"),
  title: {
    template: "%s | Yogi Pranata",
    default: "Yogi Pranata | Web Developer Portfolio",
  },
  description:
    "Website portofolio modern milik Yogi Pranata sebagai Web Developer yang berfokus pada Laravel, React, Next.js, dan sistem informasi berbasis web.",
  keywords: [
    "Yogi Pranata",
    "Web Developer",
    "Laravel Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Yogi Pranata" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Yogi Pranata Portfolio",
    title: "Yogi Pranata | Web Developer Portfolio",
    description:
      "Website portofolio modern milik Yogi Pranata sebagai Web Developer yang berfokus pada Laravel, React, Next.js, dan sistem informasi berbasis web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
