import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // Using Inter for a more professional "UI" feel
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Island Dog";

export const metadata: Metadata = {
  title: `${businessName} | Private Portal`,
  description: "Bespoke digital experience.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a", // Deep obsidian
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950 overscroll-none">
      <body className={`${inter.className} antialiased text-neutral-200`}>
        {children}
      </body>
    </html>
  );
}
