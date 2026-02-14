import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Island Dog Pet Wash";

export const metadata: Metadata = {
  title: `${businessName} | Official App`,
  description: "Bespoke pet grooming and self-wash services.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: businessName,
  },
};

export const viewport: Viewport = {
  themeColor: "#002b5b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Makes it feel like a real app
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overscroll-none">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
