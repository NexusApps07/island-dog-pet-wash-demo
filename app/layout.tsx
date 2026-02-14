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

// --- DYNAMIC METADATA ---
const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Barks N Bubbles";
const location = process.env.NEXT_PUBLIC_LOCATION || "Local Area";

export const metadata: Metadata = {
  title: `${businessName} | Stress-Free Pet Grooming`,
  description: `Professional grooming services for pets in ${location}. Book your stress-free appointment today!`,
  manifest: "/manifest.json", // Essential for PWA
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}