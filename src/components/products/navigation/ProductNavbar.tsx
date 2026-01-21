"use client";

import { Activity } from "lucide-react";
import Link from "next/link";

export function ProductNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Activity className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-foreground">
            EcoTrack Pro
          </span>
        </Link>

        {/* Links with Blue Underline Effect */}
       

        {/* CTA - Updated to match Hero section */}
        <a 
          href="#request-demo"
          className="gradient-bg inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
}