import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProductPageProps {
  hero: ReactNode;
  features: Feature[];
  compliance?: string[];
  additionalSections?: ReactNode[];
}

export default function ProductPage({
  hero,
  features,
  compliance,
  additionalSections = [],
}: ProductPageProps) {
  return (
    <>
      {/* Minimal Sticky Navbar */}
      

      {/* Spacer to prevent hero being hidden behind fixed navbar */}
      

      {/* Hero Section */}
      {hero}

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-white border border-blue-100 hover:shadow-xl transition"
            >
              <div className="mb-4 text-blue-500">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      {compliance && (
        <section className="bg-blue-50 py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-10">
              Compliance & Validation
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {compliance.map((c, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white rounded-xl shadow-sm font-medium text-gray-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      {additionalSections.map((section, i) => (
        <div key={i}>{section}</div>
      ))}
    </>
  );
}
