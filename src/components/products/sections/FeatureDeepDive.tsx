import { FileText, AlertCircle, CheckCircle2, BarChart2, Users, Settings, Shield, Clock, Bell, Link2, Database, Workflow } from 'lucide-react';

const featureCategories = [
  {
    title: 'Document Management',
    description: 'Complete control over your quality documentation lifecycle',
    icon: FileText,
    color: 'blue',
    features: [
      {
        name: 'Version Control',
        detail: 'Automatic versioning with full history. Compare versions side-by-side, restore previous versions, and track every change with timestamps and user attribution.',
        example: 'When updating an SOP, the system automatically creates version 2.0, preserves version 1.0, and maintains a complete change log for auditors.',
      },
      {
        name: 'Approval Workflows',
        detail: 'Configurable multi-level approval processes with parallel and sequential routing options. Set up automatic escalations for overdue reviews.',
        example: 'A batch record requires QA review, then production manager approval, then QA director final sign-off—all automated with email notifications.',
      },
      {
        name: 'Electronic Signatures',
        detail: '21 CFR Part 11 compliant e-signatures with meaning enforcement, password authentication, and non-repudiation.',
        example: 'Sign documents from any device. The signature includes timestamp, signature meaning, and cryptographic proof of authenticity.',
      },
    ],
  },
  {
    title: 'Quality Events',
    description: 'Systematic handling of deviations, CAPAs, and change controls',
    icon: AlertCircle,
    color: 'amber',
    features: [
      {
        name: 'Deviation Tracking',
        detail: 'Capture deviations with structured data collection. Classify by type, severity, and product impact. Link to affected batches and documents.',
        example: 'A temperature excursion is logged, automatically classified as critical, linked to affected batches, and routed to QA for investigation.',
      },
      {
        name: 'CAPA Management',
        detail: 'End-to-end corrective and preventive action tracking. Root cause analysis tools, action assignment, effectiveness verification.',
        example: 'After identifying a recurring deviation root cause, create a CAPA with specific actions, due dates, and owners. Track through effectiveness checks.',
      },
      {
        name: 'Change Control',
        detail: 'Manage all changes systematically. Impact assessments, stakeholder reviews, implementation tracking, and post-change verification.',
        example: 'Propose a manufacturing process change, assess impact on 12 related documents, route for review to 5 departments, track implementation.',
      },
    ],
  },
  {
    title: 'Compliance & Audits',
    description: 'Stay audit-ready with comprehensive compliance tools',
    icon: Shield,
    color: 'green',
    features: [
      {
        name: 'Audit Trail',
        detail: 'Immutable, timestamped log of every system action. User, action, old value, new value, and context captured for complete traceability.',
        example: 'Auditors can see that John Smith approved document X on March 15 at 2:34 PM from IP address 192.168.1.100.',
      },
      {
        name: 'Compliance Dashboards',
        detail: 'Real-time visibility into compliance status. Track training completeness, document review status, CAPA closure rates, and more.',
        example: 'One glance shows 98% training compliance, 3 documents overdue for review, and 5 CAPAs requiring effectiveness verification.',
      },
      {
        name: 'Audit Management',
        detail: 'Plan audits, manage schedules, track findings, and follow through on corrective actions. Supports internal, external, and supplier audits.',
        example: 'Schedule an FDA mock audit, assign auditors, upload evidence, log findings by severity, and track remediation to closure.',
      },
    ],
  },
  {
    title: 'Analytics & Reporting',
    description: 'Transform quality data into actionable insights',
    icon: BarChart2,
    color: 'purple',
    features: [
      {
        name: 'Custom Reports',
        detail: 'Build reports with drag-and-drop. Filter, group, and visualize data. Schedule automated distribution to stakeholders.',
        example: 'Create a weekly deviation summary report grouped by department, filtered by open status, sent every Monday to department heads.',
      },
      {
        name: 'Trend Analysis',
        detail: 'Identify patterns in quality data. Statistical process control charts, trend lines, and predictive indicators.',
        example: 'Spot that deviation rates in Line 3 have increased 40% over 6 months, correlating with new raw material supplier.',
      },
      {
        name: 'Executive Dashboards',
        detail: 'High-level KPIs for leadership. Quality costs, cycle times, compliance scores, and benchmarking metrics.',
        example: 'CEO sees quality cost trending down 15%, customer complaints reduced by 25%, and audit findings closed 20% faster.',
      },
    ],
  },
];

export const FeatureDeepDive = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Feature Deep Dive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Capabilities, <span className="gradient-text">Detailed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Not just feature cards—comprehensive explanations with real-world examples of how each capability transforms your quality operations.
          </p>
        </div>

        <div className="space-y-24">
          {featureCategories.map((category, catIndex) => (
            <div key={category.title} className="relative">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {category.features.map((feature, featIndex) => (
                  <div
                    key={feature.name}
                    className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10"
                  >
                    {/* Feature name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-bold text-foreground text-lg">{feature.name}</h4>
                    </div>

                    {/* Detail */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {feature.detail}
                    </p>

                    {/* Example */}
                    <div className="bg-blue-50/70 rounded-xl p-4 border-l-3 border-primary">
                      <p className="text-xs font-semibold text-primary mb-1">Real-World Example:</p>
                      <p className="text-sm text-gray-700">{feature.example}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              {catIndex < featureCategories.length - 1 && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
