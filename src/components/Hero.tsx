"use client";

import Spline from "@splinetool/react-spline";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import dynamic from 'next/dynamic'; 
import { BadgeCheck, Globe, ShieldCheck } from "lucide-react";

// TypeScript declaration for Spline viewer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          loading?: string;
          'on-load'?: () => void;
        },
        HTMLElement
      >;
    }
  }
}

// DYNAMIC IMPORT FIX
const LottiePlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false } 
);

// CONSTANT FOR LOTTIE URL
const LOTTIE_WAVE_URL = "/anims/WaveLinesAnimation.json";

const PRIMARY_COLOR = "#1e9df1";
const SECONDARY_COLOR = "#0ea5e9";
const PRIMARY_COLOR_TWO = "#0077e6";

const HeroSection: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Enhanced Typing Animation with Line Breaks
  useEffect(() => {
    const texts = [
      { line1: "Smarter", line2: "Environments" },
      { line1: "Better", line2: "Compliance" },
      { line1: "Enhanced", line2: "Safety" }
    ];
    
    let currentIndex = 0;
    let currentLine1 = "";
    let currentLine2 = "";
    let currentPhase = 1;
    let typingSpeed = 100;
    
    const type = () => {
      const current = texts[currentIndex];
      
      if (currentPhase === 1) {
        currentLine1 = current.line1.substring(0, currentLine1.length + 1);
        setDisplayText(currentLine1);
        setCurrentLine(1);
        
        if (currentLine1 === current.line1) {
          setTimeout(() => {
            currentPhase = 2;
            type();
          }, 300);
          return;
        }
      } 
      else if (currentPhase === 2) {
        currentLine2 = current.line2.substring(0, currentLine2.length + 1);
        setDisplayText(currentLine1 + "\n" + currentLine2);
        setCurrentLine(2);
        
        if (currentLine2 === current.line2) {
          setTimeout(() => {
            currentPhase = 3;
            type();
          }, 2000);
          return;
        }
      }
      else if (currentPhase === 3) {
        if (currentLine2.length > 0) {
          currentLine2 = current.line2.substring(0, currentLine2.length - 1);
          setDisplayText(currentLine1 + "\n" + currentLine2);
        } else if (currentLine1.length > 0) {
          currentLine1 = current.line1.substring(0, currentLine1.length - 1);
          setDisplayText(currentLine1);
          setCurrentLine(1);
        } else {
          currentPhase = 1;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, 500);
          return;
        }
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const startTyping = setTimeout(type, 1000);
    return () => clearTimeout(startTyping);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      if (cubeRef.current && glowRef.current) {
        const { innerWidth, innerHeight } = window;
        const rotX = (y / innerHeight - 0.5) * 20;
        const rotY = (x / innerWidth - 0.5) * 20;
        cubeRef.current.style.transform = `rotateY(${rotY}deg) rotateX(${-rotX}deg)`;

        const glowX = (x / innerWidth - 0.5) * 40;
        const glowY = (y / innerHeight - 0.5) * 40;
        const intensity = 0.25 + Math.abs(rotX + rotY) / 50;

        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
        glowRef.current.style.background = `radial-gradient(circle at center, rgba(30,157,241,${intensity}) 0%, transparent 70%)`;
      }

      if (gridRef.current) {
        const moveX = (x / window.innerWidth - 0.5) * 20;
        const moveY = (y / window.innerHeight - 0.5) * 20;
        gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const cubeFaceTransforms = [
    "translateZ(80px)",
    "rotateY(90deg) translateZ(80px)",
    "rotateY(180deg) translateZ(80px)",
    "rotateY(-90deg) translateZ(80px)",
    "rotateX(90deg) translateZ(80px)",
    "rotateX(-90deg) translateZ(80px)",
  ];

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-lg">
                4D
              </div>
              <span className="text-xl font-bold text-gray-900 font-[var(--font-geist-sans)]">
                4D Solutions
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-gray-700 font-medium text-sm font-[var(--font-geist-sans)]">
            {[
              { label: "Home", id: "home" },
              { label: "Solutions", id: "solutions" },
              { label: "Clients", id: "clients" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="relative group transition-colors duration-300 hover:text-blue-400 hover:cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-blue-400"></span>
              </button>
            ))}
          </nav>

          <div data-aos="zoom-in" data-aos-delay="600">
            <a
              href="#get-started"
              className="px-5 py-2 rounded-lg font-semibold bg-primary hover:bg-primary/90 text-white transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Grid Background */}
      <section
        id="home"
        ref={containerRef}
        className="relative bg-white min-h-screen flex items-center justify-center pt-16 pb-0 w-full overflow-hidden" 
      >
        {/* Animated Grid Background */}
        <div
          ref={gridRef}
          className="absolute inset-0 z-0 pointer-events-none transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(${PRIMARY_COLOR}15 1px, transparent 1px),
              linear-gradient(90deg, ${PRIMARY_COLOR}15 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>

        {/* Secondary Moving Grid Layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(${SECONDARY_COLOR}10 1px, transparent 1px),
              linear-gradient(90deg, ${SECONDARY_COLOR}10 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            backgroundPosition: "0 0",
            animation: "gridMoveReverse 25s linear infinite",
          }}
        ></div>

        {/* Blue parallax glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${PRIMARY_COLOR}20 0%, transparent 700px)`,
            transition: "background 0.1s ease-out",
          }}
        ></div>

        <div className="relative z-20 w-full px-3 sm:px-4 md:px-6 py-12 lg:py-16 flex justify-center">
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Section */}
          <div
            className="space-y-6 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h1
              className="text-[3rem] sm:text-[3.5rem] lg:text-[5rem] font-bold font-[var(--font-geist-sans)] leading-[1.25] tracking-tight text-gray-900"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span className="block">Innovating for</span>
              <span
                className="bg-clip-text text-transparent inline-block min-h-[2.5em] whitespace-pre-line"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${PRIMARY_COLOR})`,
                }}
              >
                {displayText}
                <span 
                  className={`inline-block w-0.5 h-[1.1em] bg-blue-400 animate-pulse align-middle ${
                    currentLine === 2 ? 'mt-4' : ''
                  }`}
                  style={{ marginLeft: '2px' }}
                ></span>
              </span>
            </h1>

            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              At 4D Solutions, we specialize in intelligent monitoring systems that ensure compliance, efficiency, and safety across industries — from pharmaceuticals to critical infrastructure.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button
                onClick={() => handleScroll("solutions")}
                className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl text-white overflow-hidden group transition-all duration-500 ease-out transform hover:scale-105 text-base sm:text-lg shadow-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_COLOR_TWO} 100%)` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                  Explore Solutions
                </span>
              </button>

              <button
                onClick={() => handleScroll("about")}
                className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl overflow-hidden group transition-all duration-500 ease-out transform hover:scale-105 text-base sm:text-lg border-2 border-blue-500 hover:border-blue-600"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 group-hover:tracking-wider">
                  Learn More
                </span>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Feature badges */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 mt-2 justify-center lg:justify-start font-[var(--font-geist-sans)]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="relative group whitespace-nowrap">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent text-sm sm:text-base">
                  <BadgeCheck className="w-5 h-5" />
                  Industry Expertise
                </span>
              </div>

              <div className="relative group whitespace-nowrap">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent text-sm sm:text-base">
                  <Globe className="w-5 h-5" />
                  Global Reach
                </span>
              </div>

              <div className="relative group whitespace-nowrap">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5" />
                  Compliance-Driven
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Spline 3D Viewer */}
          <div
            className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                transform: 'scale(1.5)',  // ← CHANGE THIS NUMBER: 1.2, 1.3, 1.4, 1.5, 1.6, etc.
                transformOrigin: 'center center'
              }}
            >
              <Spline
                scene="https://prod.spline.design/59vlx0c29IL44sK6/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
              />
            </div>
          </div>
          </div>
        </div>
        
        {/* Lottie Wave Animation */}
        <div
          className="absolute z-30 pointer-events-none w-full"
          data-aos="fade-up"
          data-aos-duration="1500"
          style={{
            bottom: '0',
            left: '0'
          }}
        >
          <LottiePlayer 
              autoplay
              loop
              src={LOTTIE_WAVE_URL}
              rendererSettings={{
                  preserveAspectRatio: 'none', 
              }}
              style={{ width: '100%', height: '150px', display: 'block' }} 
          />
        </div>
      </section>

      {/* Back to Top */}
      {showTopBtn && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
            <button
              onClick={scrollToTop}
              className="relative p-4 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})` }}
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes gridMoveReverse {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -80px -80px;
          }
        }
        
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;