// components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gray-50 text-gray-900 py-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Green shadow gradient from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30, 157, 241, 0.1), transparent 80%)",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          About Us
        </span>

        <h2
          className="text-4xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Who We Are
        </h2>

        <p
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          At <span className="text-primary font-semibold">4D Solutions</span>, we are dedicated to
          delivering cutting-edge Environmental Monitoring Systems (EMS).
          Our mission is to empower businesses—especially in the pharmaceutical and
          critical infrastructure sectors—with smarter, safer, and fully compliant monitoring
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-6 rounded-xl bg-white border border-primary/20 shadow-sm"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h3 className="text-lg font-semibold mb-2 text-primary">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              To be the global leader in intelligent monitoring systems, driving innovation
              and sustainability across industries.
            </p>
          </div>

          <div
            className="p-6 rounded-xl bg-white border border-primary/20 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-lg font-semibold mb-2 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              Providing reliable EMS solutions that ensure compliance, protect assets,
              and enhance decision-making with real-time insights.
            </p>
          </div>

          <div
            className="p-6 rounded-xl bg-white border border-primary/20 shadow-sm"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3 className="text-lg font-semibold mb-2 text-primary">
              Our Values
            </h3>
            <p className="text-gray-600 text-sm">
              Innovation, trust, and excellence guide everything we do—ensuring our clients’
              operations are safeguarded today and tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
