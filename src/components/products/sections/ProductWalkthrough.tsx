"use client";

import { useState } from 'react';
import { ChevronRight, FileText, CheckSquare, AlertTriangle, BarChart3, Settings, Users, Map, Database } from 'lucide-react';

const screens = [
  {
    id: 'dashboard',
    title: 'Real-Time Dashboard',
    icon: BarChart3,
    image: '/ecotrackpro/Capture18.png',
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
    image: '/ecotrackpro/Capture1.png', // Update this path to your actual sensor status image
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
    image: '/ecotrackpro/Capture27.png', // Update to your data logs image path
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
    image: '/ecotrackpro/Capture6.png', // Update to your Report Builder image path
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
    image: '/ecotrackpro/Capture2.png', // Update to your Audit Trail image path
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
  /* --- New Options Added Below --- */
  {
    id: 'floor-mapping',
    title: 'Floor Mapping',
    icon: Map,
    image: '/ecotrackpro/Capture26.png', // Update to your Floor Map image path
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
    image: '/ecotrackpro/Capture13.png', // Update to your Database Management image path
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

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Product Walkthrough
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Every Feature, <span className="gradient-text">Explained</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore each major component of QualityFlow Pro and understand how it transforms your quality operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar navigation */}
<div className="lg:col-span-4 space-y-3">
  {screens.map((screen) => (
    <button
      key={screen.id}
      onClick={() => setActiveScreen(screen)}
      /* Update the line below to include cursor-pointer */
      className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
        activeScreen.id === screen.id
          ? 'bg-blue-50 shadow-sm border-l-4 border-blue-600'
          : 'bg-white hover:bg-gray-50 border-l-4 border-transparent'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
        activeScreen.id === screen.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
      }`}>
        <screen.icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{screen.title}</h4>
        <p className="text-sm text-gray-600 line-clamp-1">{screen.description}</p>
      </div>
      <ChevronRight className={`w-5 h-5 transition-transform ${
        activeScreen.id === screen.id ? 'text-blue-600' : 'text-gray-400'
      }`} />
    </button>
  ))}
</div>

          {/* Content area */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Screenshot - now shows actual images when available */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-white to-blue-50 relative">
                {activeScreen.image ? (
                  <>
                    <img
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
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
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeScreen.title}</h3>
        <p className="text-gray-600 mb-6">{activeScreen.description}</p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
          <p className="text-blue-700 text-sm">
            <strong>Key Benefit:</strong> {activeScreen.benefit}
          </p>
        </div>

        <h4 className="font-semibold text-gray-900 mb-4">Core Capabilities:</h4>
        <ul className="grid sm:grid-cols-2 gap-3">
          {activeScreen.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
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
    </section>
  );
};