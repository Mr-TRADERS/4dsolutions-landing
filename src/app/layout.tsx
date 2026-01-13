import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/AOSProvider";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.variable} antialiased font-sans`}>
        <AOSProvider>
          <ScrollToTopOnReload>
            {children}
          </ScrollToTopOnReload>
        </AOSProvider>
      </body>
    </html>
  );
}