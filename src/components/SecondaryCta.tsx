"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondaryCtaV3() {
  return (
    <section className="w-full py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main content container */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Top accent line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Ready When You Are
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400" />
            </div>

            {/* Heading */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Start monitoring{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  smarter
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 4C20 2 40 1 100 4C160 7 180 6 199 4" stroke="url(#paint0_linear_minimal)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_minimal" x1="0" y1="4" x2="200" y2="4" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1E9DF1" stopOpacity="0.3"/>
                      <stop offset="0.5" stopColor="#1E9DF1" stopOpacity="0.6"/>
                      <stop offset="1" stopColor="#1E9DF1" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}today.
            </h3>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the future of environmental monitoring with our industry-leading EMS platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                asChild
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8 group"
              >
                <Link href="#get-started" className="inline-flex items-center gap-2">
                  Get Started Free
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost"
                asChild
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                <Link href="#learn-more" className="inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Button>
            </div>

            {/* Simple feature badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime"
              ].map((text, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-16 flex items-center justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}