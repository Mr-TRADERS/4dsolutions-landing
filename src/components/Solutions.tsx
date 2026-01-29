"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import { CheckCircle, ArrowRight, Sparkles, Zap, Shield, Award } from "lucide-react";

// DYNAMIC IMPORT FOR LOTTIE PLAYER
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// LOTTIE ANIMATION PATH
const LOTTIE_LINES_URL = "/anims/lines.json";

const products = [
  {
    id: 1,
    slug: "eco-track-pro",
    title: "EcoTrack PRO",
    tagline: "Real-Time Environmental Intelligence",
    description:
      "A comprehensive web-based platform designed for real-time monitoring, reporting, and compliance management of critical environmental data.",
    features: [
      "Real-Time Alerts",
      "Automated Reports",
      "Audit-Ready Compliance",
      "Data Visualization Dashboards",
      "User Role Management",
    ],
    image: "/ecotrackpro/capture1.png",
    badge: "Most Popular",
    color: "blue",
  },
  {
    id: 2,
    slug: "steritrack",
    title: "SteriTrack",
    tagline: "Smart Sterilization Monitoring",
    description:
      "SteriTrack is a smart app for real-time sterilization monitoring, providing live temperature data and complete cycle records directly from your autoclaves.",
    features: [
      "Real-Time Monitoring",
      "Smart Cycle Management",
      "Complete Record Keeping",
      "User & Role Management",
      "Customizable Configuration",
    ],
    images: [
      "/SteriTrack/Cycle.jpeg",
      "/SteriTrack/Dash.jpeg",
      "/SteriTrack/Admin.jpeg",
    ],
    badge: "Mobile First",
    color: "blue",
  },
  {
    id: 3,
    slug: "petri-metrics",
    title: "Petri Metrics",
    tagline: "AI-Powered Zone Analysis",
    description:
      "Zone Reader is an AI tool that measures inhibition zones on assay plates with precision, easy verification, and USP81 compliance.",
    features: [
      "Auto-detect and measures zones",
      "Converts pixels to millimeters",
      "Digital calipers for verification",
      "Manual edits with audit trail",
      "USP81 compliance assured",
    ],
    image: "/ZoneReader/zone2.jpeg",
    badge: "AI Enhanced",
    color: "blue",
  },
];

const platformBenefits = [
  { icon: Zap, text: "Lightning Fast Performance" },
  { icon: Shield, text: "Enterprise Security" },
  { icon: Award, text: "Industry Certified" },
];

export default function SolutionsAlternating() {
  const lottieRef = useRef<any>(null);
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const product3Ref = useRef<HTMLDivElement | null>(null);

  const [currentTime, setCurrentTime] = useState<string>("");

  const [emsIndex, setEmsIndex] = useState(0);
  const emsIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const emsImages = [
    "/ecotrackpro/capture18.png",
    "/ecotrackpro/capture2.png",
    "/ecotrackpro/capture6.png",
    "/ecotrackpro/capture15.png",
    "/ecotrackpro/capture18.png",
    "/ecotrackpro/capture20.png",
  ];

  const startEMSLoop = () => {
    if (emsIntervalRef.current) return;
    setEmsIndex((prev) => (prev + 1) % emsImages.length);
    emsIntervalRef.current = setInterval(() => {
      setEmsIndex((prev) => (prev + 1) % emsImages.length);
    }, 1500);
  };

  const stopEMSLoop = () => {
    if (emsIntervalRef.current) {
      clearInterval(emsIntervalRef.current);
      emsIntervalRef.current = null;
    }
    setEmsIndex(0);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (product3Ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShowSplash(true);

              const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
              const hideTimer = setTimeout(() => setShowSplash(false), 2600);

              observer.unobserve(entry.target);
              return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
              };
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(product3Ref.current);
    }
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString([], options));
    };

    updateClock();
    const timer = setInterval(updateClock, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="solutions"
      className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 px-6 relative overflow-hidden"
    >
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100" data-aos="fade-down">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down" data-aos-delay={100}>
            Explore Our <span className="gradient-text">Solutions</span>
          </h2>
          
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" data-aos="fade-down" data-aos-delay={200}></div>
          
          <p
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Innovative platforms tailored for web, mobile, and desktop to help
            you monitor, analyze, and optimize with ease.
          </p>

          {/* Platform Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-10" data-aos="fade-up" data-aos-delay={400}>
            {platformBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {products.map((product, index) => (
          <div key={product.id}>
            {/* Enhanced Product Content */}
            <div
              ref={product.id === 3 ? product3Ref : null}
              className={`flex flex-col md:flex-row items-center md:items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* === IMAGE / MOCKUPS === */}
              <div className="flex-1 flex justify-center relative">
                {/* Product 1: EMS */}
                {product.id === 1 && (
                  <div
                    className="relative animate-floatY group w-full flex justify-center max-w-7xl mx-auto"
                    onMouseEnter={startEMSLoop}
                    onMouseLeave={stopEMSLoop}
                  >
                    <div className="hidden lg:block absolute -top-4 -left-4 w-[95%] h-[95%] lg:w-[691px] lg:h-[500px] bg-blue-200 rounded-xl border border-blue-600 shadow-lg opacity-40"></div>

                    <div
                      className="relative w-full max-w-[600px] lg:w-[700px] lg:max-w-none bg-white rounded-xl shadow-2xl border border-blue-400 overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-200/50"
                    >
                      <div className="flex items-center space-x-1 px-1 py-1 bg-gray-100 border-b border-blue-400 text-xs sm:text-sm h-8 lg:space-x-4 lg:px-3">
                        <div className="bg-blue-200 px-2 py-1 rounded-t text-gray-900 shadow truncate max-w-[120px] sm:max-w-[140px] lg:max-w-none">
                          ETPro Dashboard
                        </div>
                        
                        <div className="px-1 py-1 rounded-t text-gray-600 truncate max-w-[70px] sm:max-w-none">
                          + New Tab
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-0 py-2 bg-gray-100 border-b border-gray-300 h-10 text-xs sm:text-sm lg:px-3">
                        <div className="flex items-center space-x-0.5 text-gray-600 pl-1 lg:space-x-3">
                          <span className="cursor-pointer hover:text-gray-900">←</span>
                          <span className="cursor-pointer hover:text-gray-900">→</span>
                          <span className="cursor-pointer hover:text-gray-900">⟳</span>
                        </div>

                        <div className="flex-1 mx-1 relative lg:mx-6">
                          <div className="bg-gray-200 rounded-md px-2 py-1 text-xs text-gray-700 text-center truncate lg:text-sm">
                            www.4d-solutions.com/dashboard
                          </div>
                          <div className="absolute bottom-0 left-0 h-[2px] bg-primary animate-loading-bar"></div>
                        </div>

                        <div className="flex items-center space-x-1 text-gray-600 pr-0 lg:space-x-3 lg:pr-0">
                          <span className="cursor-pointer hover:text-gray-900">—</span>
                          <span className="cursor-pointer hover:text-gray-900">▢</span>
                          <span className="cursor-pointer hover:text-red-500">✕</span>
                        </div>
                      </div>

                      <div
                        className="relative w-full h-0 bg-[#0b1120]"
                        style={{ paddingBottom: "54%" }}
                      >
                        {emsImages.map((img, idx) => (
                        <Image
                        key={idx}
                        src={img}
                        alt={`EMS screen ${idx}`}
                        fill
                        className={`object-contain object-top rounded-b-lg absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          emsIndex === idx ? "opacity-100" : "opacity-0"
                        }`}
                      />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

               {/* Product 2: SteriTrack Phones Mockup */} 
               {product.id === 2 && ( 
                <div className="relative w-full flex justify-center py-4 sm:py-8 lg:py-12"> 
                  <div className="relative w-[380px] h-[400px] lg:w-[500px] lg:h-[520px] group transition-all duration-300"> 
                    {/* Phone 1: Left */} 
                    <div className="absolute left-2 top-10 w-[160px] h-[330px] lg:left-4 lg:top-16 lg:w-[220px] lg:h-[450px] rounded-[2.5rem] border-4 border-gray-300 bg-white shadow-xl overflow-hidden rotate-[-7deg] scale-95 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-100"> 
                      <div className="relative w-full h-full animate-floatY bg-white"> 
                        <Image src={product.images?.[0] || ""} alt={product.title} fill className="object-cover rounded-[2.2rem] bg-white" /> 
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-200 rounded-b-2xl lg:w-20 lg:h-5"></div> 
                      </div> 
                    </div> 
                    
                    {/* Phone 2: Center (Front) */} 
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[170px] h-[360px] lg:w-[230px] lg:h-[460px] rounded-[2.5rem] border-4 border-gray-300 bg-white shadow-2xl overflow-hidden z-10 scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 group-hover:scale-110"> 
                      <div className="relative w-full h-full animate-floatY delay-200 bg-white"> 
                        <Image src={product.images?.[1] || ""} alt={product.title} fill className="object-cover rounded-[2.2rem] bg-white" /> 
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-200 rounded-b-2xl lg:w-20 lg:h-5"></div> 
                      </div> 
                    </div> 
                    
                    {/* Phone 3: Right */} 
                    <div className="absolute right-2 top-12 w-[160px] h-[330px] lg:right-4 lg:top-20 lg:w-[220px] lg:h-[450px] rounded-[2.5rem] border-4 border-gray-300 bg-white shadow-xl overflow-hidden rotate-[7deg] scale-95 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-3 group-hover:rotate-2 group-hover:scale-100"> 
                      <div className="relative w-full h-full animate-floatY delay-400 bg-white"> 
                        <Image src={product.images?.[2] || ""} alt={product.title} fill className="object-cover rounded-[2.2rem] bg-white" /> 
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-200 rounded-b-2xl lg:w-20 lg:h-5"></div> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
               )}

                {/* Product 3: Petri Metrics */}
                {product.id === 3 && (
                  <div
                  className="relative animate-floatY w-[90vw] sm:w-[460px] md:w-[680px] lg:w-[720px] xl:w-[740px] h-auto aspect-[17/18] mx-auto md:mx-0 -translate-y-28 md:-translate-y-10"
                    data-aos="zoom-in-up"
                    data-aos-delay={200}
                  >
                    <Image
                      src="/mockups/moniitor.png"
                      alt="Monitor Frame"
                      fill
                      className="object-contain pointer-events-none select-none z-20"
                    />

                    <div className="absolute top-[21%] md:top-[20%] left-[5.5%] md:left-[7.5%] w-[89%] md:w-[85%] h-[49%] md:h-[47%] bg-white overflow-hidden z-10 flex flex-col rounded-md">
                      {/* Splash */}
                      {showSplash && (
                        <div
                          className={`absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-30 transition-opacity duration-300 ${
                            fadeOut ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            width="40"
                            height="40"
                            className="animate-pulse"
                          >
                            <circle cx="50" cy="50" r="48" fill="#1E3A8A" />
                            <circle cx="35" cy="40" r="6" fill="white" />
                            <circle cx="55" cy="35" r="6" fill="white" />
                            <circle cx="42" cy="58" r="6" fill="white" />
                            <circle cx="62" cy="55" r="6" fill="white" />
                          </svg>
                          <p className="text-gray-700 text-xs md:text-sm tracking-widest animate-pulse mt-2">
                            Loading...
                          </p>
                          <div className="mt-2 w-32 md:w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-primary animate-loading-barr"></div>
                          </div>
                        </div>
                      )}

                      {/* Title Bar */}
                      <div className="flex justify-between items-center bg-gray-100 text-gray-800 px-2 md:px-3 py-1 border-b border-gray-300 text-xs md:text-sm">
                        <div className="flex items-center space-x-2 md:space-x-6">
                          <span className="font-semibold text-gray-900">
                            PetriMetrics
                          </span>
                          <span className="hover:text-gray-900 cursor-default hidden md:inline">
                            File
                          </span>
                          <span className="hover:text-gray-900 cursor-default hidden md:inline">
                            Edit
                          </span>
                          <span className="hover:text-gray-900 cursor-default hidden md:inline">
                            View
                          </span>
                          <span className="hover:text-gray-900 cursor-default hidden md:inline">
                            Help
                          </span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <button
                            className="w-7 h-6 flex items-center justify-center hover:bg-gray-200 rounded transition"
                            title="Minimize"
                          >
                            <span className="text-gray-700 text-base">—</span>
                          </button>
                          <button
                            className="w-7 h-6 flex items-center justify-center hover:bg-gray-200 rounded transition"
                            title="Maximize"
                          >
                            <span className="text-gray-700 text-xs">▢</span>
                          </button>
                          <button
                            className="w-7 h-6 flex items-center justify-center hover:bg-red-500 rounded transition group"
                            title="Close"
                          >
                            <span className="text-gray-700 text-sm group-hover:text-white">
                              ✕
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Dashboard */}
                      <div className="relative w-full aspect-video">
                        <Image
                          src={product.image || ""}
                          alt={product.title}
                          fill
                          className="object-cover object-top bg-white"
                        />
                      </div>

                      {/* Status */}
                      <div className="px-2 md:px-4 py-1 bg-gray-100 text-gray-600 text-[10px] md:text-xs border-t border-gray-300 flex justify-between">
                        <span>Connected • All Sensors Active</span>
                        <span>{currentTime}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* === ENHANCED TEXT SECTION === */}
              <div
                className={`flex-1 ${
                  product.id === 3 ? "-translate-y-20 md:-translate-y-22" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Product Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full mb-4 border border-blue-100">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{product.badge}</span>
                </div>

                {/* Title with enhanced styling */}
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{product.title}</h3>
                
                {/* Tagline */}
                <p className="text-lg font-medium text-blue-600 mb-4">{product.tagline}</p>
                
                {/* Description with better spacing */}
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{product.description}</p>
                
                {/* Enhanced features list */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group cursor-default transition-all duration-300 hover:translate-x-1"
                        data-aos="fade-up"
                        data-aos-delay={100 * (idx + 1)}
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors">
                          <CheckCircle className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA Button */}
                <button
                  onClick={() =>
                    window.open(`/products/${product.slug}`, "_blank", "noopener,noreferrer")
                  }
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  Learn More About {product.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {product.id === 1 && <div className="mt-20"></div>}
              </div>
            </div>

            {/* LOTTIE ANIMATION */}
            {product.id === 1 && (
              <div
                className="w-full py-10 my-10 flex justify-start"
                data-aos="fade"
                data-aos-delay={500}
              >
                <div className="w-full max-w-[600px] lg:max-w-[700px] ml-0">
                <LottiePlayer
                  loop={false}
                  src={LOTTIE_LINES_URL}
                  style={{ width: "100%", height: "200px" }}
                  lottieRef={(instance) => {
                    if (instance) {
                      instance.goToAndStop(0, true);
                      instance.play();
                      instance.addEventListener("complete", () => {
                        const lastFrame = instance.getDuration(true);
                        instance.goToAndStop(lastFrame, true);
                      });
                    }
                  }}
                />
                </div>
              </div>
            )}

            {/* LOTTIE ANIMATION AFTER PRODUCT 2 */}
            {product.id === 2 && (
              <div
                className="w-full py-2 my-2 flex justify-end"
                data-aos="fade"
                data-aos-delay={800}
              >
                <div className="w-full max-w-[600px] lg:max-w-[700px] mr-0 transform -scale-x-100">
                  <LottiePlayer
                    loop={false}
                    src={LOTTIE_LINES_URL}
                    style={{ width: "100%", height: "200px" }}
                    lottieRef={(instance) => {
                      if (instance) {
                        instance.goToAndStop(0, true);
                        instance.play();
                        instance.addEventListener("complete", () => {
                          const lastFrame = instance.getDuration(true);
                          instance.goToAndStop(lastFrame, true);
                        });
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}