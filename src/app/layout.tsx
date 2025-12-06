import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/AOSProvider";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload"; // ✅ Import here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4D Solutions | Smarter Environmental Monitoring Systems for Pharma & Industry",
  description:
    "4D Solutions is your trusted partner for advanced Environmental Monitoring Systems — real-time, compliant, and built for critical industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>
          <ScrollToTopOnReload>
            {children}
          </ScrollToTopOnReload>
        </AOSProvider>
      </body>
    </html>
  );
}
