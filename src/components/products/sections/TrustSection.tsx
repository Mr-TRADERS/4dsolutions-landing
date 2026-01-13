import { Building2, Award, Clock, Users, Globe, TrendingUp } from 'lucide-react';

const industries = [
  'Pharmaceutical Manufacturing',
  'Biotechnology',
  'Medical Devices',
  'Clinical Research',
  'Contract Manufacturing',
  'Food & Beverage',
  'Aerospace & Defense',
  'Automotive',
];

const stats = [
  { value: '500+', label: 'Enterprise Customers', icon: Building2 },
  { value: '99.9%', label: 'Uptime SLA', icon: Clock },
  { value: '50M+', label: 'Records Managed', icon: TrendingUp },
  { value: '30+', label: 'Countries Served', icon: Globe },
];

const reliabilityFeatures = [
  {
    title: 'Enterprise Infrastructure',
    points: [
      'SOC 2 Type II certified data centers',
      'Multi-region redundancy',
      'Automatic failover and disaster recovery',
      'End-to-end encryption (AES-256)',
    ],
  },
  {
    title: 'Performance Guarantees',
    points: [
      '99.9% uptime SLA with credits',
      'Sub-second page load times',
      'Unlimited concurrent users',
      'Global CDN for fast access worldwide',
    ],
  },
  {
    title: 'Support & Success',
    points: [
      '24/7 technical support',
      'Dedicated customer success manager',
      'Onboarding and training programs',
      'Regular business reviews',
    ],
  },
];

export const TrustSection = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Trust & Reliability
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">Enterprise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Fortune 500 companies and growing startups alike trust QualityFlow Pro for their most critical quality operations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span 
                key={industry} 
                className="px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-100 text-sm font-medium text-foreground hover:border-primary/30 hover:shadow-md transition-all cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Reliability features */}
        <div className="grid lg:grid-cols-3 gap-6">
          {reliabilityFeatures.map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground">{feature.title}</h4>
              </div>
              <ul className="space-y-3">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
