'use client';

import { Smartphone, Bell, Shield, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: 'Mobile-First Monitoring',
    description: 'Monitor sterilization cycles directly from your mobile device with a clean and intuitive app experience.',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description: 'Receive real-time alerts when sterilization cycles complete or when critical parameters exceed safe thresholds.',
  },
  {
    icon: Shield,
    title: 'Reliable Compliance',
    description: 'Maintain complete sterilization records for audit readiness and operational traceability.',
  },
  {
    icon: FileCheck,
    title: 'Cycle History & Reports',
    description: 'Access historical sterilization data, cycle summaries, and records anytime from your app.',
  },
];

export const SteriTrackOverview = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Product Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Sterilization Monitoring, <span className="gradient-text">Simplified</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            SteriTrack is a mobile-first sterilization monitoring application designed to help healthcare and laboratory teams track autoclave cycles in real time, maintain complete records, and improve process visibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};