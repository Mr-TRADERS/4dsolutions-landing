"use client";

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Wifi, Zap, Shield, Database, Radio, Cable, Smartphone, AlertCircle, 
  Lock, Clock, Users, FileText, ChevronRight, Mail, Phone, Globe, Sparkles
} from 'lucide-react';

export const ProductOverview = () => {
  const [activeTab, setActiveTab] = useState('connectivity');

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const connectivityFeatures = [
    {
      icon: Cable,
      title: 'Universal Analog Sensor Support',
      description: 'Direct integration with standard industrial analog sensors (4-20mA / 0-10V) for highly accurate raw data acquisition.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Radio,
      title: 'Industrial Modbus RTU/TCP',
      description: 'Native communication with PLCs, HMIs, and industrial networks via RS485 (Modbus RTU) and Ethernet (Modbus TCP).',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wifi,
      title: 'High-Range Wi-Fi Transmitters',
      description: 'Seamless wireless data transmission using Wi-Fi-enabled sensor nodes, perfect for cleanrooms and restricted areas.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Third-Party Integration',
      description: 'Drop-in compatibility with existing instruments and legacy data loggers, protecting your current hardware investments.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const keyFeatures = [
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Continuously tracks temperature, humidity, and atmospheric pressure for strict environmental compliance.'
    },
    {
      icon: AlertCircle,
      title: 'Instant Alarms & Notifications',
      description: 'Triggers instant alerts via hardware relays, SMS gateways, and mobile push notifications when thresholds are breached.'
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Access',
      description: 'Check live facility status anytime via responsive Web panel or native Mobile apps (Android & iOS).'
    },
    {
      icon: FileText,
      title: 'Auto Data Logging & Reports',
      description: 'Maintains tamper-proof logs with timestamps. Generate audit-ready PDF reports with embedded graphs in one click.'
    },
    {
      icon: Zap,
      title: 'Calibration Management',
      description: 'Built-in sensor calibration module with custom offset adjustments and detailed historical logs for compliance.'
    },
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Strict security with dedicated privileges for Admins, Operators, and Viewers.'
    },
    {
      icon: Lock,
      title: 'Immutable Audit Trails',
      description: 'Automatically logs all user activity, configurations, sensor updates, and system alerts.'
    },
    {
      icon: Shield,
      title: 'AES-256 Data Security',
      description: 'Enterprise-grade encryption between sensor nodes, servers, and applications with automated local data buffering.'
    }
  ];

  const whyChoose = [
    {
      number: '01',
      title: 'Compliance Made Easy',
      description: 'Fully engineered to meet FDA 21 CFR Part 11 and ISO 17025 standards, ensuring 100% audit-readiness.'
    },
    {
      number: '02',
      title: 'Unmatched Data Security',
      description: 'AES-256 encrypted communication with automated buffering prevents data gaps during network outages.'
    },
    {
      number: '03',
      title: 'Scalable & Future-Ready',
      description: 'Deploy from single sensors to enterprise-wide multi-facility networks with effortless distributed architecture.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20" />

      <div className="container-wide relative z-10"><br></br><br></br>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Product Overview
          </span>

          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-aos="fade-up"
          >
            Advanced, <span className="gradient-text">Environmental Monitoring</span> System
          </h2>
          <p 
            className="text-xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Where Precision Meets Reliability
          </p>
          <div 
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Sparkles className="w-4 h-4 inline-block mr-2" />
            NEW: Advanced Connectivity & Integration
          </div>
          <p 
            className="text-lg text-muted-foreground mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            EcoTrack PRO is now fully compatible with legacy industrial systems and modern wireless networks, eliminating the need for expensive infrastructure overhauls.
          </p>
        </div>

        {/* Connectivity Features - Featured Section */}
        <div className="mb-20">
          <h3 
            className="text-2xl font-bold text-center mb-12 text-foreground"
            data-aos="fade-up"
          >
            Next-Generation <span className="gradient-text">Connectivity</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectivityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative"
                  data-aos="slide-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur" 
                       style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
                  
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key System Features */}
        <div className="mb-20">
          <h3 
            className="text-2xl font-bold text-center mb-4 text-foreground"
            data-aos="fade-up"
          >
           Key System <span className="gradient-text">Features</span>
          </h3>
          <p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Comprehensive monitoring, security, and compliance features designed for pharmaceutical and industrial facilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-default"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-20">
          <h3 
            className="text-2xl font-bold text-center mb-12 text-foreground"
            data-aos="fade-up"
          >
           Why Choose <span className="gradient-text">EcoTrack PRO?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <div 
                key={idx} 
                className="relative group"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-transparent transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-600 mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Specifications */}
        <div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200 p-8 md:p-12 mb-20"
          data-aos="slide-up"
        >
          <h3 
            className="text-2xl font-bold mb-8 text-foreground"
            data-aos="fade-up"
          >
            Deployment & Hardware Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right" data-aos-delay="100">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Architecture
              </h4>
              <p className="text-gray-700">Scalable on-premise local server setup or secure, high-availability cloud integration.</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                Module Dimensions
              </h4>
              <p className="text-gray-700">Industrial, compact enclosure: 120mm × 80mm × 45mm for flexible deployment options.</p>
            </div>
          </div>
        </div>

       
      
      </div>
    </section>
  );
};