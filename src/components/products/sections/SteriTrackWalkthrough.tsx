"use client";

import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Bell,
  Shield,
  FileText,
  Play,
  Pause,
  X,
  Maximize2,
  ExternalLink
} from 'lucide-react';

const screens = [
  {
    id: 'dashboard',
    title: 'Mobile Dashboard',
    icon: Smartphone,
    image: '/SteriTrack/Dash.jpeg',
    description: 'A clean mobile dashboard showing sterilization system overview and live cycle status.',
    benefit: 'Track autoclave operations instantly from your phone without needing to stay near the machine.',
    features: [
      'Live sterilization cycle status',
      'Easy-to-read mobile UI',
      'Quick access to active autoclaves',
      'Instant overview of sterilization activity',
    ],
  },
  {
    id: 'cycle',
    title: 'Cycle Monitoring',
    icon: Bell,
    image: '/SteriTrack/Cycle.jpeg',
    description: 'Monitor sterilization cycle details in real time including status and process visibility.',
    benefit: 'Ensure every sterilization cycle is properly monitored and recorded without manual paperwork.',
    features: [
      'Live cycle progress monitoring',
      'Cycle start/end visibility',
      'Real-time process tracking',
      'Reduced human monitoring effort',
    ],
  },
  {
    id: 'admin',
    title: 'Admin & Management',
    icon: Shield,
    image: '/SteriTrack/Admin.jpeg',
    description: 'Manage app users, system settings, and operational controls from the admin section.',
    benefit: 'Maintain control over access, roles, and app configuration in one secure place.',
    features: [
      'User and role management',
      'Administrative controls',
      'Secure access management',
      'Centralized mobile app configuration',
    ],
  },
  {
    id: 'records',
    title: 'Digital Record Keeping',
    icon: FileText,
    image: '/SteriTrack/Dash.jpeg',
    description: 'Keep complete sterilization records digitally for compliance and operational history.',
    benefit: 'Replace paper-based logs with organized digital records that are easy to retrieve anytime.',
    features: [
      'Digital cycle history',
      'Easy retrieval of records',
      'Improved traceability',
      'Audit-friendly documentation',
    ],
  },
];

export const SteriTrackWalkthrough = () => {
  const [activeScreen, setActiveScreen] = useState(screens[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  const currentIndex = screens.findIndex((s) => s.id === activeScreen.id);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveScreen((prev) => {
          const currentIdx = screens.findIndex((s) => s.id === prev.id);
          const nextIdx = (currentIdx + 1) % screens.length;
          return screens[nextIdx];
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    setAnimateFeatures(false);
    const timer = setTimeout(() => setAnimateFeatures(true), 100);
    return () => clearTimeout(timer);
  }, [activeScreen.id]);

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % screens.length;
    setActiveScreen(screens[nextIdx]);
  };

  const goToPrev = () => {
    const prevIdx = currentIndex === 0 ? screens.length - 1 : currentIndex - 1;
    setActiveScreen(screens[prevIdx]);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Product Walkthrough
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            SteriTrack in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Explore how SteriTrack helps teams monitor sterilization cycles, manage records, and stay in control from anywhere.
          </p>

          <button
            onClick={toggleAutoPlay}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                Pause Tour
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Start Guided Tour
              </>
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  setActiveScreen(screen);
                  setIsAutoPlaying(false);
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  activeScreen.id === screen.id
                    ? 'bg-blue-50 shadow-sm border-l-4 border-blue-600 scale-[1.02]'
                    : 'bg-white hover:bg-gray-50 border-l-4 border-transparent hover:scale-[1.01]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeScreen.id === screen.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <screen.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{screen.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-1">{screen.description}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeScreen.id === screen.id ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-white to-blue-50 relative group">
                <img
                  key={activeScreen.id}
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="w-full h-full object-contain transition-opacity duration-500 animate-in fade-in"
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 py-2.5 border border-gray-200/50">
                    <span className="text-sm font-semibold text-gray-800">{activeScreen.title}</span>
                  </div>
                </div>

                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                >
                  <Maximize2 className="w-5 h-5 text-gray-800" />
                </button>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {screens.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => {
                        setActiveScreen(screen);
                        setIsAutoPlaying(false);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        activeScreen.id === screen.id
                          ? 'w-8 h-2 bg-blue-600'
                          : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{activeScreen.title}</h3>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Try It Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-gray-600 mb-6">{activeScreen.description}</p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
                  <p className="text-blue-700 text-sm">
                    <strong>Key Benefit:</strong> {activeScreen.benefit}
                  </p>
                </div>

                <h4 className="font-semibold text-gray-900 mb-4">Core Capabilities:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {activeScreen.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 transition-all duration-300 ${
                        animateFeatures ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-4xl w-full flex justify-center">
            <img
              src={activeScreen.image}
              alt={activeScreen.title}
              className="max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        </div>
      )}
    </section>
  );
};