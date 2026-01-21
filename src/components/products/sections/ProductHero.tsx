"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/products/ui/button";
import { ArrowRight, Play, History, Thermometer, ShieldCheck } from 'lucide-react';

interface ProductHeroProps {
  badge: string;
  title: string;
  typingLines: string[];
  description: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  visual?: React.ReactNode;
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  badge,
  title,
  typingLines,
  description,
  ctaPrimary = "Request Demo",
  ctaSecondary = "Contact Sales",
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingLines[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % typingLines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, typingLines]);

  const glowRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPositionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Cancel any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    const updateGlow = () => {
      if (!glowRef.current) return;

      // Smooth interpolation for lag-free feel
      const dx = targetPositionRef.current.x - currentPositionRef.current.x;
      const dy = targetPositionRef.current.y - currentPositionRef.current.y;
      
      // Fast interpolation for responsive tracking (0.5 = more responsive, adjust as needed)
      currentPositionRef.current.x += dx * 0.5;
      currentPositionRef.current.y += dy * 0.5;

      // Use transform for GPU acceleration
      glowRef.current.style.transform = `translate(${currentPositionRef.current.x - 192}px, ${currentPositionRef.current.y - 192}px)`;

      // Continue animation if we haven't reached the target
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafIdRef.current = requestAnimationFrame(updateGlow);
      } else {
        // Snap to final position for precision
        currentPositionRef.current = { ...targetPositionRef.current };
        glowRef.current.style.transform = `translate(${currentPositionRef.current.x - 192}px, ${currentPositionRef.current.y - 192}px)`;
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(updateGlow);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Mouse hover blue glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 50%)',
          left: 0,
          top: 0,
          willChange: 'transform',
        }}
      />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {/* Badge */}
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-8">
  <History className="w-4 h-4" />
  <span className="text-sm font-semibold">{badge}</span>
</div>

          {/* Main heading - "Pro" in blue */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
            <span className="text-gray-900">{title.split(" ")[0]} </span>
            <span className="gradient-text">{title.split(" ")[1]}</span>
          </h1>

          {/* Typing effect subheading */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <p className="text-xl md:text-3xl text-gray-500 font-medium">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="group">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="mr-2 w-5 h-5" />
              Contact Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-600">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-blue-500" />
              <span className="text-sm  font-medium">Real-Time Environmental Sensors</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm  font-medium">IQ/OQ/PQ Validated</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-blue-500" />
              <span className="text-sm  font-medium">Automated Audit Trails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};