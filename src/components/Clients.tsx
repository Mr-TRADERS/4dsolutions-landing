"use client";
import React, { useState } from "react";

const clientsRow1 = [
  "/logos/abbott.jpg",
  "/logos/agp.jpg",
  "/logos/atco.jpg",
  "/logos/dow.jpg",
  "/logos/genix-logo.jpg",
  "/logos/getz.jpg",
  "/logos/gsk-logo.jpg",
  "/logos/health-tec.jpg",
];

const clientsRow2 = [
  "/logos/martin-dow.jpg",
  "/logos/novartist.jpg",
  "/logos/oncogen.jpg",
  "/logos/sanofi.jpg",
  "/logos/searl.jpg",
  "/logos/scilife.jpg",
  "/logos/sami.jpg",
];

export default function Clients() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="clients"
      className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top gradient glow */}
        <div
          className="absolute top-0 left-0 w-full h-48"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30,157,241,0.08), transparent)",
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(30,157,241,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(30,157,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Trusted Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Trusted by industries{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our solutions empower businesses, labs, and organizations to achieve
            compliance and efficiency.
          </p>
        </div>

        {/* Logos Container */}
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className={`flex gap-8 animate-scroll-left ${isPaused ? 'paused' : ''}`}
                style={{
                  width: "fit-content",
                }}
              >
                {/* Duplicate the array for seamless loop */}
                {[...clientsRow1, ...clientsRow1].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-40 h-24 group cursor-pointer"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="relative w-full h-full bg-white rounded-xl shadow-sm group-hover:shadow-md p-6 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 overflow-hidden transition-all duration-200">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/20 transition-all duration-200 rounded-xl" />
                      
                      <img
                        src={logo}
                        alt={`Client logo ${i}`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 relative z-10 transition-all duration-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className={`flex gap-8 animate-scroll-right ${isPaused ? 'paused' : ''}`}
                style={{
                  width: "fit-content",
                }}
              >
                {/* Duplicate the array for seamless loop */}
                {[...clientsRow2, ...clientsRow2].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-40 h-24 group cursor-pointer"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="relative w-full h-full bg-white rounded-xl shadow-sm group-hover:shadow-md p-6 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 overflow-hidden transition-all duration-200">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/20 transition-all duration-200 rounded-xl" />
                      
                      <img
                        src={logo}
                        alt={`Client logo ${i}`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 relative z-10 transition-all duration-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bottom CTA or stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium">14+ Industry Partners</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium">Global Reach</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium">100% Compliance</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left.paused,
        .animate-scroll-right.paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}