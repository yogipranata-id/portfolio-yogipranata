import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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
      "Website portofolio modern milik Yogi Pranata sebagai Web Developer yang berfokus pada sistem informasi berbasis web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
