'use client';

import { CheckCircle, Users, Shield, Zap, Thermometer, Activity, Bell, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Track temperature, humidity, and environmental conditions 24/7 with instant visibility across all facilities.',
  },
  {
    icon: Bell,
    title: 'Intelligent Alerts',
    description: 'Automated notifications via email, SMS, or push when conditions deviate from acceptable ranges.',
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Built-in support for GMP, 21 CFR Part 11, and other regulatory requirements with full audit trails.',
  },
  {
    icon: FileCheck,
    title: 'Automated Reporting',
    description: 'Generate compliance reports instantly. Export to PDF, CSV, or integrate via API.',
  },
];

export const ProductOverview = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 1. DOTTED BACKGROUND - Preserved from your original design */}
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
            Environmental Monitoring, <span className="gradient-text">Reimagined</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            EcoTrack Pro is a comprehensive environmental monitoring and compliance platform designed for pharmaceutical facilities. It replaces manual logging and fragmented tools with one unified system that ensures regulatory compliance, prevents product loss, and delivers actionable insights.
          </p>
        </div>

        {/* Key Benefits Grid */}
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