import { Shield, FileCheck, Lock, Eye, Database, AlertTriangle, CheckCircle2 } from 'lucide-react';

const complianceStandards = [
  {
    name: '21 CFR Part 11',
    description: 'FDA regulation for electronic records and signatures',
    features: ['Electronic signatures', 'Audit trails', 'Access controls', 'Data integrity'],
  },
  {
    name: 'EU Annex 11',
    description: 'European guidelines for computerized systems',
    features: ['Validation requirements', 'Data backup', 'Business continuity', 'System access'],
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system requirements',
    features: ['Document control', 'Continuous improvement', 'Risk management', 'Process approach'],
  },
  {
    name: 'ISO 13485:2016',
    description: 'Medical device quality management',
    features: ['Design controls', 'Traceability', 'Complaint handling', 'Risk analysis'],
  },
];

const alcoaPlus = [
  { letter: 'A', name: 'Attributable', description: 'Every record identifies who performed the action' },
  { letter: 'L', name: 'Legible', description: 'Data is permanently recorded and readable' },
  { letter: 'C', name: 'Contemporaneous', description: 'Records are created at time of activity' },
  { letter: 'O', name: 'Original', description: 'First capture of information is preserved' },
  { letter: 'A', name: 'Accurate', description: 'Data is correct, truthful, and complete' },
  { letter: '+', name: 'Complete', description: 'All data including repeat tests included' },
  { letter: '+', name: 'Consistent', description: 'Date/time stamps in expected sequence' },
  { letter: '+', name: 'Enduring', description: 'Records remain accessible throughout retention' },
  { letter: '+', name: 'Available', description: 'Data accessible when needed for review' },
];

const validationFeatures = [
  {
    icon: FileCheck,
    title: 'IQ/OQ/PQ Documentation',
    description: 'Complete installation, operational, and performance qualification packages provided. Validation protocols and test scripts included.',
  },
  {
    icon: Lock,
    title: 'Access Control Matrix',
    description: 'Role-based permissions with principle of least privilege. Segregation of duties enforced. All access changes logged.',
  },
  {
    icon: Eye,
    title: 'Audit Trail',
    description: 'Immutable, timestamped record of all system activities. Who, what, when, where, and why for every change. Cannot be modified or deleted.',
  },
  {
    icon: Database,
    title: 'Data Backup & Recovery',
    description: 'Automated backups with encryption. Point-in-time recovery capability. Disaster recovery testing and documentation.',
  },
  {
    icon: AlertTriangle,
    title: 'Change Control Integration',
    description: 'System changes managed through formal change control. Impact assessments, testing, and re-validation tracked.',
  },
  {
    icon: Shield,
    title: 'Periodic Review',
    description: 'Tools for ongoing validated state verification. Automated compliance checking and exception reporting.',
  },
];

export const ComplianceValidation = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Compliance & Validation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">Regulatory Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            QualityFlow Pro is designed from the ground up to meet the most stringent regulatory requirements. 
            Compliance isn't an afterthought—it's our foundation.
          </p>
        </div>

        {/* Standards grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Supported Standards & Regulations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard) => (
              <div key={standard.name} className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{standard.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ALCOA+ */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">ALCOA+ Data Integrity</h3>
              <p className="text-muted-foreground">Every principle enforced by design</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
              {alcoaPlus.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                    <span className="text-xl md:text-2xl font-bold text-primary">{item.letter}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground hidden md:block mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Validation Features */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Validation & Audit Readiness</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {validationFeatures.map((feature) => (
              <div key={feature.title} className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
