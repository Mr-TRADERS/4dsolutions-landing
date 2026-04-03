'use client';

import { Smartphone, Wifi, Bell } from 'lucide-react';
import Image from 'next/image';

export const SteriTrackHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden py-24">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-[500px] h-[500px] bg-blue-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            Mobile App
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            SteriTrack <span className="text-blue-600">Mobile Monitoring</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Monitor sterilization cycles in real time, receive instant notifications, and maintain complete digital records—all from your mobile device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
              Request Demo
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Phone mockup with screenshots */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[560px] bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
            <Image
              src="/SteriTrack/Dash.jpeg"
              alt="SteriTrack Mobile Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating icons */}
          <div className="absolute top-8 left-1/4 flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md animate-float">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Live Dashboard</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md animate-float animation-delay-500">
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Instant Alerts</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md animate-float animation-delay-1000">
              <Wifi className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Cloud Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};