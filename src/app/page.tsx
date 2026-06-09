import Hero from "@/components/Hero";



import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";   // ⬅️ Import Clients
import About from "@/components/About";
import Contact from "@/components/Contact";
import SecondaryCta from "@/components/SecondaryCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
     
     

      <Solutions />
      <Clients /> {/* ⬅️ New Clients logos slider section */}
      <About />
      <Contact />
      <SecondaryCta />
      <Footer />
    </div>
  );
}
