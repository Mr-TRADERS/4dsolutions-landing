"use client";

// components/AboutV2.tsx
export default function AboutV2() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-900 py-24 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue shadow gradient from top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30, 157, 241, 0.1), transparent 80%)",
          }}
        ></div>

        {/* Animated blob backgrounds */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Diagonal lines decoration */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(30,157,241,0.3) 0px,
              rgba(30,157,241,0.3) 1px,
              transparent 1px,
              transparent 60px
            )`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-full border border-blue-200/50 backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse animation-delay-150" />
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse animation-delay-300" />
              </div>
              <span className="text-sm font-semibold text-blue-700">
                About Us
              </span>
            </div>
          </div>

          <h2
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Who We{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Are
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 5 100 2 150 5C200 8 250 10 298 5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E9DF1" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#1E9DF1" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#1E9DF1" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At <span className="text-primary font-semibold">4D Solutions</span>, we are dedicated to
            delivering cutting-edge Environmental Monitoring Systems (EMS).
            Our mission is to empower businesses—especially in the pharmaceutical and
            critical infrastructure sectors—with smarter, safer, and fully compliant monitoring
            solutions.
          </p>
        </div>

        {/* Three pillars - stacked cards style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            className="group relative"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {/* Card with spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200 overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                01
              </div>

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To be the global leader in intelligent monitoring systems, driving innovation
                and sustainability across industries.
              </p>
            </div>
          </div>

          <div
            className="group relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                02
              </div>

              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Providing reliable EMS solutions that ensure compliance, protect assets,
                and enhance decision-making with real-time insights.
              </p>
            </div>
          </div>

          <div
            className="group relative"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                03
              </div>

              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 relative z-10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Innovation, trust, and excellence guide everything we do—ensuring our clients'
                operations are safeguarded today and tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up" 
          data-aos-delay="700"
        >
          {[
            { value: "10+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { value: "500+", label: "Projects Delivered", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { value: "98%", label: "Client Satisfaction", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { value: "24/7", label: "Support Available", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
          ].map((stat, i) => (
            <div key={i} className="group text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <svg className="w-8 h-8 text-blue-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
              </svg>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}