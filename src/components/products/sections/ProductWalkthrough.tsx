"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, FileText, AlertTriangle, BarChart3, Settings, Users, Map, Database, Play, Pause, X, Maximize2, ExternalLink } from 'lucide-react';

const screens = [
  {
    id: 'dashboard',
    title: 'Real-Time Dashboard',
    icon: BarChart3,
    image: '/ecotrackpro/capture18.png',
    description: 'Comprehensive dark-mode interface for live monitoring of critical environmental parameters.',
    benefit:
      'Instantly identify deviations across multiple metrics with color-coded status indicators (Normal, High Alarm, Low Alarm).',
    features: [
      'Multi-parameter tracking (Temp, Humidity, Pressure, Particles, CO2)',
      'Visual gauge widgets with real-time value readouts',
      'Instant alarm state visualization (Red for Alarms, Green for OK)',
      'Defined set-point limits displayed per monitoring tile',
    ],
  },
  {
    id: 'sensor',
    title: 'Sensor Status Overview',
    icon: FileText,
    image: '/ecotrackpro/capture1.png',
    description:
      'Detailed monitoring of specific zones and cleanroom environments.',
    benefit:
      'Pinpoint environmental fluctuations in specific rooms with dedicated sensor tiles and adjustable gauge sizes.',
    features: [
      'Room-specific monitoring views (e.g., Clean Room A)',
      'Individual sensor identification (TEMP-01, HUM-01, etc.)',
      'Adjustable UI density with SM, MD, and LG gauge sizes',
      'Live "Low" and "High" alarm badges directly on sensor gauges',
    ],
  },
  {
    id: 'historical',
    title: 'Historical Data & Trends',
    icon: AlertTriangle,
    image: '/ecotrackpro/capture27.png',
    description:
      'Advanced sensor data logs with multi-parameter filtering and pivoted views.',
    benefit:
      'Perform deep-dive investigations into environmental history with automated data pivoting and status-based filtering.',
    features: [
      'Pivoted and List view toggles for flexible data analysis',
      'Advanced filtering by Sensor ID, Alarm Status, and Time Gap',
      'Historical timestamp tracking for every data point',
      'Instant identification of High/Low alarm events in audit history',
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance Reports',
    icon: Users,
    image: '/ecotrackpro/capture6.png',
    description:
      'Step-by-step custom report builder with advanced data aggregation and visualization options.',
    benefit:
      'Generate regulatory-ready reports in seconds by selecting from pre-configured templates like Alarm, Calibration, or full Compliance reports.',
    features: [
      'Multi-template selection (Standard, Alarm, Calibration, Compliance)',
      'Customizable data aggregation and chart type selection',
      'One-click inclusion of Statistics Summaries, Charts, and Data Tables',
      'Guided 3-step configuration workflow for error-free reporting',
    ],
  },
  {
    id: 'audit',
    title: 'Audit Logs',
    icon: Settings,
    image: '/ecotrackpro/capture2.png',
    description:
      'Comprehensive tracking of all system changes, user activities, and data interactions.',
    benefit:
      'Maintain full GxP compliance with a permanent, tamper-proof record of every login, report generation, and configuration change.',
    features: [
      'Advanced event filtering (Logins, Reports, Data Module creation)',
      'Detailed activity summaries including specific timestamps and user IDs',
      'One-click Export PDF for regulatory inspections and internal reviews',
      'Entity-level tracking (Users, Reports, Locations, and DataModules)',
    ],
  },
  {
    id: 'floor-mapping',
    title: 'Floor Mapping',
    icon: Map,
    image: '/ecotrackpro/capture26.png',
    description:
      'Spatial visualization of real-time environmental data across your facility layout.',
    benefit:
      'Gain immediate situational awareness by seeing exactly where alarms are occurring within your physical floor plan.',
    features: [
      'Interactive blueprint overlays with zoom and fullscreen capabilities',
      'Real-time sensor status badges (Normal, Low Alarm, High Alarm, Offline)',
      'Type-based filtering for Temp, Humidity, Pressure, Particles, and CO2',
      'Sidebar integration showing live numeric values for all mapped sensors',
    ],
  },
  {
    id: 'database-management',
    title: 'Database Management',
    icon: Database,
    image: '/ecotrackpro/capture13.png',
    description:
      'Secure backup and restoration control center for critical environmental data.',
    benefit:
      'Ensure 100% data availability and disaster recovery readiness with automated tracking of system backup history.',
    features: [
      'One-click "Create Backup" functionality for instant data snapshots',
      'Detailed backup logs with file names, sizes, and precise timestamps',
      'Direct Action controls: Download, Restore, and Secure Delete',
      'High-level storage metrics (Total Backups, Total Size, Last Backup Date)',
    ],
  },
];

export const ProductWalkthrough = () => {
  const [activeScreen, setActiveScreen] = useState(screens[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  const currentIndex = screens.findIndex(s => s.id === activeScreen.id);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveScreen(prev => {
          const currentIdx = screens.findIndex(s => s.id === prev.id);
          const nextIdx = (currentIdx + 1) % screens.length;
          return screens[nextIdx];
        });
      }, 2000); // Change screen every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Animate features when screen changes
  useEffect(() => {
    setAnimateFeatures(false);
    const timer = setTimeout(() => setAnimateFeatures(true), 100);
    return () => clearTimeout(timer);
  }, [activeScreen.id]);

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  // Handle keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        goToNext();
        setIsAutoPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop, not on content
    if (e.target === e.currentTarget) {
      setIsFullscreen(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden overflow-x-hidden py-12 md:py-20 w-full">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Product Walkthrough
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Every Feature, <span className="gradient-text">Explained</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Explore each major component of QualityFlow Pro and understand how it transforms your quality operations.
          </p>
          
          {/* Auto-play tour button */}
          <button
            onClick={toggleAutoPlay}
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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

        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {/* Sidebar navigation - HIDDEN ON MOBILE */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
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
                <div className={`gradient-bg w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeScreen.id === screen.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <screen.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{screen.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-1">{screen.description}</p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  activeScreen.id === screen.id ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Content area - FULL WIDTH ON MOBILE */}
          <div className="w-full lg:col-span-8 overflow-hidden">
            {/* Mobile Screen Selector */}
            <div className="lg:hidden mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Screen {currentIndex + 1}/{screens.length}</span>
              </div>
              <div className="overflow-x-auto -mx-4 md:-mx-6">
                <div className="flex gap-2 flex-nowrap px-4 md:px-6 pb-2">
                  {screens.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => {
                        setActiveScreen(screen);
                        setIsAutoPlaying(false);
                      }}
                      className={`flex-shrink-0 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                        activeScreen.id === screen.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {idx + 1}. {screen.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden w-full">
              {/* Screenshot with navigation */}
              <div className="aspect-video md:aspect-video bg-gradient-to-br from-blue-100 via-white to-blue-50 relative group">
                {activeScreen.image ? (
                  <>
                    {/* Image with fade transition */}
                    <img
                      key={activeScreen.id}
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      className="w-full h-full object-contain transition-opacity duration-500 animate-in fade-in"
                    />
                    
                    {/* Floating label at bottom */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 max-w-[90%]">
                      <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 md:px-8 py-2.5 md:py-3 border border-gray-200/50 whitespace-nowrap">
                        <span className="text-xs md:text-sm font-semibold text-gray-800">{activeScreen.title}</span>
                      </div>
                    </div>

                    {/* Navigation arrows - ALWAYS VISIBLE, RESPONSIVE SIZE */}
                    <button
                      onClick={goToPrev}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/85 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-xl z-20 group/nav"
                      aria-label="Previous screen"
                      title="Previous (← or Left Arrow)"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover/nav:text-white transition-colors duration-300" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/85 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-xl z-20 group/nav"
                      aria-label="Next screen"
                      title="Next (→ or Right Arrow)"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover/nav:text-white transition-colors duration-300" />
                    </button>

                    {/* Fullscreen button - always visible on mobile, hover on desktop */}
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="absolute top-3 md:top-4 right-3 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                      aria-label="View fullscreen"
                      title="View fullscreen"
                    >
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                    </button>

                    {/* Progress dots */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {screens.map((screen, idx) => (
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
                          aria-label={`Go to ${screen.title}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <activeScreen.icon className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-gray-600">{activeScreen.title} Screenshot</p>
                      <p className="text-sm text-muted-foreground">Interactive preview coming soon</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words">{activeScreen.title}</h3>
                  {/* Try It Live Button */}
                 
                </div>
                <p className="text-gray-600 mb-6 break-words text-sm md:text-base">{activeScreen.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-3 md:p-4 mb-6 border-l-4 border-blue-600 overflow-hidden">
                  <p className="text-blue-700 text-xs md:text-sm break-words">
                    <strong>Key Benefit:</strong> {activeScreen.benefit}
                  </p>
                </div>

                <h4 className="font-semibold text-gray-900 mb-4">Core Capabilities:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {activeScreen.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-2 transition-all duration-300 overflow-hidden ${
                        animateFeatures 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-gray-700 break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          {/* Close Button - FIXED POSITION (always visible in viewport) */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="fixed top-3 md:top-4 right-3 md:right-4 w-11 md:w-12 h-11 md:h-12 bg-red-600 hover:bg-red-700 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-[60] shadow-lg"
            aria-label="Close fullscreen"
            title="Press ESC to close"
          >
            <X className="w-5 md:w-6 h-5 md:h-6 text-white font-bold" />
          </button>
          
          {/* Content Container */}
          <div className="w-full max-w-7xl flex flex-col items-center justify-center py-4 md:py-6 lg:py-8 pt-12 md:pt-14">
            <img
              src={activeScreen.image}
              alt={activeScreen.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 md:mt-6 px-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{activeScreen.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm">{activeScreen.description}</p>
              <p className="text-xs md:text-sm text-gray-400 mt-2 md:mt-3">💡 Press ESC, click the red X, or click outside to close</p>
            </div>
          </div>

          {/* Fullscreen navigation - LEFT */}
          <button
            onClick={goToPrev}
            className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 md:w-14 h-12 md:h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </button>

          {/* Fullscreen navigation - RIGHT */}
          <button
            onClick={goToNext}
            className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 md:w-14 h-12 md:h-14 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
            aria-label="Next screen"
          >
            <ChevronRight className="w-6 md:w-7 h-6 md:h-7 text-white" />
          </button>
        </div>
      )}
    </section>
  );
};