"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import SteriTrack-specific sections
import { SteriTrackHero } from "@/components/products/sections/SteriTrackHero";
import { SteriTrackOverview } from "@/components/products/sections/SteriTrackOverview";
import { SteriTrackWalkthrough } from "@/components/products/sections/SteriTrackWalkthrough";
import { FinalCTA } from "@/components/products/sections/FinalCTA";
import { ProductNavbar } from "@/components/products/navigation/SteriProductNavbar";

export default function SteriTrackPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Navbar specific for SteriTrack */}
      <ProductNavbar />

      <main className="pt-16">
        {/* Hero Section */}
        <div data-aos="fade-up">
          <SteriTrackHero />
        </div>

        {/* Product Overview Section */}
        <div data-aos="fade-up" data-aos-delay={100}>
          <SteriTrackOverview />
        </div>

        {/* Walkthrough Section */}
        <div id="walkthrough" data-aos="fade-up" data-aos-delay={200}>
          <SteriTrackWalkthrough />
        </div>

        {/* Final Call-to-Action Section */}
        <div data-aos="zoom-in" data-aos-delay={150}>
          <FinalCTA />
        </div>
      </main>
    </>
  );
}