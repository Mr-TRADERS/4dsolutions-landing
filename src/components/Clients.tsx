"use client";
import React, { useState } from "react";

const clientsRow1 = [
  "/logos/abbott.jpg",
  "/logos/agp.jpg",
  "/logos/atco.jpg",
  "/logos/dow.jpg",
  "/logos/genix-logo.jpg",
  "/logos/getz.jpg",
  "/logos/gsk-logo.jpg",
  "/logos/health-tec.jpg",
];

const clientsRow2 = [
  "/logos/martin-dow.jpg",
  "/logos/novartist.jpg",
  "/logos/oncogen.jpg",
  "/logos/sanofi.jpg",
  "/logos/searl.jpg",
  "/logos/scilife.jpg",
];

export default function Clients() {
  // Shared pause state for both sliders
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="clients"
      className="relative bg-white text-center py-16 overflow-hidden"
    >
      {/* Top green gradient shadow */}
     {/* Top green gradient shadow */}
     <div className="absolute inset-0 pointer-events-none">
  <div
    className="absolute top-0 left-0 w-full h-40"
    style={{
      background: "linear-gradient(to bottom, rgba(30,157,241,0.1), transparent)",
    }}
  />
</div>



      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trusted by industries worldwide
        </h2>
        <p className="text-gray-600 mb-10">
          Our solutions empower businesses, labs, and organizations to achieve
          compliance and efficiency.
        </p>

        {/* Row 1 */}
        <div
          className={`slider-container ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="slider">
            {clientsRow1.concat(clientsRow1).map((logo, i) => (
              <div className="slide" key={i}>
                <img src={logo} alt={`Client logo ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          className={`slider-container reverse ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="slider">
            {clientsRow2.concat(clientsRow2).map((logo, i) => (
              <div className="slide" key={i}>
                <img src={logo} alt={`Client logo ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
