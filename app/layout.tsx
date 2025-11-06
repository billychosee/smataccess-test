import type { Metadata } from "next";
import { Sofia_Sans, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SmatAcces - Secure Access Management Solutions",
  description: "Leading access management platform providing enterprise-grade security solutions. Manage permissions, monitor activity, and ensure data protection with SmatAcces.",
  keywords: "access management, security, permissions, enterprise security, data protection",
  authors: [{ name: "SmatAcces Team" }],
  openGraph: {
    title: "SmatAcces - Secure Access Management Solutions",
    description: "Leading access management platform providing enterprise-grade security solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmatAcces - Secure Access Management Solutions",
    description: "Leading access management platform providing enterprise-grade security solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaSans.variable} ${geistMono.variable} ${inter.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
