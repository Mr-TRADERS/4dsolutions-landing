"use client";

import React from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  industry: string;
}

const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    {
      name: "Genix",
      logo: "/logos/genix-logo.jpg",
      industry: "Pharmaceutical"
    },
    {
      name: "Sanofi",
      logo: "/logos/sanofi.jpg",
      industry: "Pharmaceutical"
    },
    {
      name: "GSK",
      logo: "/logos/gsk-logo.jpg",
      industry: "Pharmaceutical"
    },
    {
      name: "SAMI",
      logo: "/logos/sami.jpg",
      industry: "Pharmaceutical"
    }
  ];

  return (
    <section 
      id="clients"
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4"
            data-aos="zoom-in"
          >
            ✅ Trusted by Industry Leaders
          </span>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Pharmaceutical Companies <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Using EcoTrack Pro
            </span>
          </h2>
          
          <p 
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Leading pharmaceutical organizations rely on EcoTrack Pro for real-time environmental monitoring, compliance management, and operational excellence across their facilities.
          </p>
        </div>

        {/* Clients Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur" />
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center">
                {/* Logo Container */}
                <div className="relative w-full h-32 mb-6 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="max-w-[150px] max-h-[80px] object-contain filter group-hover:brightness-110 transition-all duration-300"
                    priority
                  />
                </div>

                {/* Company Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {client.industry}
                  </p>
                </div>

                {/* Hover Badge */}
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-2xl text-xs font-bold">
                    Active User
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            { number: "4+", label: "Pharmaceutical Partners" },
            { number: "100%", label: "Data Accuracy" },
            { number: "24/7", label: "Monitoring Support" },
            { number: "99.9%", label: "System Uptime" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={500 + idx * 50}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-gray-600 mb-6">
            Join leading pharmaceutical companies trusting EcoTrack Pro
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Request a Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;