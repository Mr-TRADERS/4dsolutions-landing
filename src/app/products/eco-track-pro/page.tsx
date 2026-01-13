import { ProductHero } from "@/components/products/sections/ProductHero";
import { ProductOverview } from "@/components/products/sections/ProductOverview";
import { ProductWalkthrough } from "@/components/products/sections/ProductWalkthrough";




import { FinalCTA } from "@/components/products/sections/FinalCTA";
import { ProductNavbar } from "@/components/products/navigation/ProductNavbar";

export default function EcoTrackProPage() {
  return (
    <>
      <ProductNavbar />

      <main className="pt-16">
        <ProductHero
          badge="Environmental Monitoring Platform"
          title="EcoTrack Pro"
          typingLines={[
            "Real-time compliance",
            "Instant alerts & insights",
            "Audit-ready dashboards",
          ]}
          description="Monitor temperature, humidity, and environmental conditions in real-time. Ensure regulatory compliance with automated alerts, audit trails, and GMP-ready reporting for pharmaceutical, healthcare, and laboratory facilities."
          ctaPrimary="Request Demo"
          ctaSecondary="Contact Sales"
        />

        <ProductOverview />

        <div id="overview">
          <ProductWalkthrough />
        </div>



        
     
        <FinalCTA />
      </main>
    </>
  );
}