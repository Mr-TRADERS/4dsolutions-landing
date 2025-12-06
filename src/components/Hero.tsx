"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import dynamic from 'next/dynamic'; 

// DYNAMIC IMPORT FIX
const LottiePlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false } 
);

// CONSTANT FOR LOTTIE URL
const LOTTIE_WAVE_URL = "/anims/WaveLinesAnimation.json";

const PRIMARY_COLOR = "#1e9df1";
const SECONDARY_COLOR = "#0ea5e9";

const HeroSection: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Enhanced Typing Animation with Line Breaks (No Changes)
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

      // Enhanced grid parallax effect
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
      {/* Header (No Changes) */}
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
        // FIX: Set a larger padding-bottom to reserve space for the wave.
        className="relative bg-white min-h-screen flex items-center justify-center pt-20 pb-[50px] max-w-full" 
      >
        {/* Animated Grid Background (No Changes) */}
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

        {/* Secondary Moving Grid Layer (No Changes) */}
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

        {/* Blue parallax glow (No Changes) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${PRIMARY_COLOR}20 0%, transparent 700px)`,
            transition: "background 0.1s ease-out",
          }}
        ></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section (No Changes) */}
          <div
            className="space-y-10 text-center lg:text-left"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* Buttons (No Changes) */}
              <button
                onClick={() => handleScroll("solutions")}
                className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl text-white overflow-hidden group transition-all duration-500 ease-out transform hover:scale-105 text-base sm:text-lg"
              >
                {/* Animated Blue Gradient Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <div className="absolute inset-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500"></div>
                
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                
                {/* Button text */}
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                  Explore Solutions
                </span>
              </button>

              <button
                onClick={() => handleScroll("about")}
                className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl overflow-hidden group transition-all duration-500 ease-out transform hover:scale-105 text-base sm:text-lg"
              >
                {/* Animated Blue Gradient Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <div className="absolute inset-[2px] rounded-xl bg-white"></div>
                
                {/* Text with blue gradient */}
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 group-hover:tracking-wider">
                  Learn More
                </span>
                
                {/* Arrow icon animation */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Feature badges (No Changes) */}
            <div
              className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start font-[var(--font-geist-sans)]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent">
                  <span className="relative z-10">✅ Industry Expertise</span>
                </span>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent">
                  <span className="relative z-10">🌐 Global Reach</span>
                </span>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:bg-transparent">
                  <span className="relative z-10">🔒 Compliance-Driven</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Cube (No Changes) */}
          <div
            className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] flex items-center justify-center"
            data-aos="zoom-in-left"
            data-aos-delay="500"
          >
            <div
              ref={cubeRef}
              className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[360px] aspect-square flex items-center justify-center transition-transform duration-700 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(5deg) rotateX(-5deg)",
              }}
            >
              {/* Glow */}
              <div
                ref={glowRef}
                className="absolute w-[160px] sm:w-[180px] md:w-[200px] lg:w-[340px] aspect-square rounded-full blur-3xl transition-all duration-300 ease-out"
                style={{
                  background: `radial-gradient(circle, ${PRIMARY_COLOR}25, transparent 70%)`,
                }}
                data-aos="zoom-in"
                data-aos-delay="600"
              ></div>

              {/* Cube Faces */}
              <div className="absolute w-full h-full animate-[spin_18s_linear_infinite] [transform-style:preserve-3d]">
                {cubeFaceTransforms.map((t, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-full border border-blue-400/30 rounded-xl"
                    style={{
                      transform: t,
                      boxShadow: `0 0 20px ${PRIMARY_COLOR}40`,
                      background: `linear-gradient(145deg, ${PRIMARY_COLOR}05, ${PRIMARY_COLOR}15)`,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 150}
                  ></div>
                ))}
              </div>

              {/* Center Logo */}
              <div
                className="relative z-30 flex items-center justify-center"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div
                  className="absolute w-[100px] sm:w-[140px] md:w-[160px] lg:w-[220px] h-[100px] sm:h-[140px] md:h-[160px] lg:h-[220px] rounded-full blur-3xl opacity-50 animate-pulse-slow"
                  style={{
                    background: `radial-gradient(circle, ${PRIMARY_COLOR}35, ${PRIMARY_COLOR}05 70%, transparent 100%)`,
                  }}
                ></div>

                <div
                  className="absolute w-[90px] sm:w-[120px] md:w-[140px] lg:w-[200px] h-[90px] sm:h-[120px] md:h-[140px] lg:h-[200px] rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 animate-spin-slow"
                  style={{
                    mixBlendMode: "overlay",
                    maskImage: "radial-gradient(circle at center, white 40%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, white 40%, transparent 80%)",
                  }}
                ></div>

                <img
                  src="/logo.svg"
                  alt="4D"
                  className="relative w-[80px] sm:w-[110px] md:w-[130px] lg:w-[180px] object-contain"
                  style={{ filter: `drop-shadow(0 0 35px ${PRIMARY_COLOR}90)` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 🌊 LOTTIE ANIMATION: END OF SECTION / FULL VIEWPORT WIDTH - AOS ADDED HERE */}
        <div
          className="absolute z-30 pointer-events-none"
          data-aos="fade-up" // ✅ AOS Animation
          data-aos-duration="1500" // ✅ Longer duration for a smoother reveal
          style={{
            width: '100vw', 
            left: '50%',    
            transform: 'translateX(-50%)', 
            bottom: '-30px' 
          }}
        >
          <LottiePlayer 
              autoplay
              loop
              src={LOTTIE_WAVE_URL}
              rendererSettings={{
                  preserveAspectRatio: 'none', 
              }}
              style={{ width: '100%', height: '150px' }} 
          />
        </div>

      </section>

      {/* Back to Top (No Changes) */}
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

      {/* Enhanced CSS animations (No Changes) */}
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