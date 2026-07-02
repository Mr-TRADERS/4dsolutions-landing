"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ProductHero } from "@/components/products/sections/ProductHero";
import { ProductOverview } from "@/components/products/sections/ProductOverview";
import { ProductWalkthrough } from "@/components/products/sections/ProductWalkthrough";
import ClientsSection from "@/components/products/sections/ClientsSection";
import { FinalCTA } from "@/components/products/sections/FinalCTA";
import { ProductNavbar } from "@/components/products/navigation/ProductNavbar";

export default function EcoTrackProPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <ProductNavbar />

      <main className="pt-16">
        <div data-aos="fade-up">
        <ProductHero
  badge="Environmental Monitoring Platform"
  title="EcoTrack Pro"
  typingLines={[
    "Real-time compliance",
    "Instant alerts & insights",
    "Audit-ready dashboards",
  ]}
  description="Monitor temperature, humidity, and environmental conditions in real-time. Ensure regulatory compliance with automated alerts, audit trails, and GMP-ready reporting for pharmaceutical, healthcare, and laboratory facilities."
  ctaPrimary="Get Started"
  ctaSecondary="Contact Sales"
/>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <ProductOverview />
        </div>

        <div id="overview" data-aos="fade-up" data-aos-delay="200">
          <ProductWalkthrough />
        </div>

        <div id="overview" data-aos="fade-up" data-aos-delay="200">
          <ClientsSection />
        </div>

        <div id="contact-form" data-aos="zoom-in" data-aos-delay="150">
  <FinalCTA />
</div>
      </main>
    </>
  );
}
