import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rasa } from "next/font/google";

import { Toaster } from "sonner";

import { QueryProvider } from "@/components/query-provider";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

const rasa = Rasa({
  subsets: ["latin"],
  variable: "--font-rasa",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Velocity Tax Express",
  description: "Meet our team of tax and financial experts helping clients achieve financial success.",
  icons: {
    icon: "/vteicon.ico",
    shortcut: "/vteicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rasa.variable} antialiased`}
      >
        <QueryProvider>
          <Toaster />
          <SplashScreen />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
