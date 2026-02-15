import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// DNA Extraction
const APP_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Nexus Local";
const APP_DESC = process.env.NEXT_PUBLIC_BUSINESS_TAGLINE || "Premium Services";
const THEME_COLOR = process.env.NEXT_PUBLIC_THEME_COLOR || "#000000";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
  // Fix: Prepend BASE_PATH to static assets
  manifest: `${BASE_PATH}/manifest.json`,
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/icon-192x192.png`,
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-[#050505] text-gray-100 antialiased overflow-x-hidden selection:bg-white/20`}
      >
        {/* Global Ambient Glow */}
        <div className="fixed top-[-20%] left-[-20%] w-[70vw] h-[70vw] bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
        
        <main className="relative z-10 w-full max-w-md mx-auto min-h-screen flex flex-col shadow-2xl shadow-black/80 bg-[#0a0a0a]">
           {children}
        </main>
      </body>
    </html>
  );
}
