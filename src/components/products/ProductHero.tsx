"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/products/ui/button";
import { ArrowRight, Play, Activity, Thermometer, Shield } from 'lucide-react';

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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8">
            <Activity className="w-4 h-4" />
            <span className="text-sm font-medium">{badge}</span>
          </div>

          {/* Main heading - "Pro" in blue */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">{title.split(" ")[0]} </span>
            <span className="text-blue-500">{title.split(" ")[1]}</span>
          </h1>

          {/* Typing effect subheading */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-600">
              {displayText}
              <span className="animate-pulse text-blue-500">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg shadow-blue-500/20">
              {ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-medium text-lg transition-colors">
              <Play className="w-5 h-5" />
              {ctaSecondary}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-600">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-blue-500" />
              <span className="text-sm md:text-base font-medium">Real-Time Sensors</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm md:text-base font-medium">21 CFR Part 11 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="text-sm md:text-base font-medium">GMP Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};