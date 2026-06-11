import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZIPCARTCO. Web Solutions — SaaS Licensing & Distribution",
  description:
    "Global software licensing, reseller partnerships, and localized distribution solutions. Powered by MRF's ZIPCARTCO. Web Solutions.",
  keywords: [
    "SaaS",
    "software licensing",
    "reseller",
    "distribution",
    "ZIPCARTCO",
    "Web Solutions",
    "localization",
  ],
  authors: [{ name: "MRF's ZIPCARTCO. Web Solutions" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "ZIPCARTCO. Web Solutions — SaaS Licensing & Distribution",
    description:
      "Global software licensing, reseller partnerships, and localized distribution solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
