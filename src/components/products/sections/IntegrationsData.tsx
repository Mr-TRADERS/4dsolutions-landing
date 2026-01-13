import { Wifi, Database, Cloud, ArrowLeftRight, FileJson, Server, Plug, RefreshCw } from 'lucide-react';

const integrations = [
  {
    category: 'Laboratory Systems',
    items: ['LIMS', 'Chromatography Data Systems', 'Electronic Lab Notebooks', 'Stability Chambers'],
  },
  {
    category: 'Manufacturing',
    items: ['ERP Systems (SAP, Oracle)', 'MES Platforms', 'SCADA/Historians', 'Batch Record Systems'],
  },
  {
    category: 'Business Systems',
    items: ['HR/Training Systems', 'Document Management', 'CRM Platforms', 'Business Intelligence'],
  },
  {
    category: 'IoT & Sensors',
    items: ['Temperature Monitoring', 'Environmental Sensors', 'Equipment Sensors', 'Real-time Alerts'],
  },
];

const dataCapabilities = [
  {
    icon: FileJson,
    title: 'Flexible Data Import',
    description: 'Import data from CSV, Excel, XML, JSON, and API feeds. Mapping tools ensure data lands in the right fields.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Bi-directional Sync',
    description: 'Keep systems in sync with real-time or scheduled synchronization. Conflict resolution and error handling built-in.',
  },
  {
    icon: Database,
    title: 'Data Warehouse',
    description: 'Central repository for quality data. Pre-built analytics models and custom query capabilities.',
  },
  {
    icon: Cloud,
    title: 'API-First Architecture',
    description: 'RESTful APIs for all system functions. Webhook support for event-driven integrations.',
  },
];

export const IntegrationsData = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-background opacity-30" />
      
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Integrations & Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connected <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            QualityFlow Pro doesn't exist in isolation. Connect with your existing systems, sensors, and data sources for a unified quality landscape.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">Integration Architecture</h3>
          
          <div className="relative">
            {/* Central hub */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-3xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/20">
                <div className="text-center text-white">
                  <Server className="w-10 h-10 mx-auto mb-1" />
                  <span className="text-sm font-bold">QualityFlow</span>
                </div>
              </div>
            </div>

            {/* Connection lines visual */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((group) => (
                <div key={group.category} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Plug className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground text-sm">{group.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <RefreshCw className="w-3 h-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCapabilities.map((cap) => (
            <div key={cap.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{cap.title}</h4>
              <p className="text-sm text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Export formats */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Supported export formats</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['PDF', 'Excel', 'CSV', 'XML', 'JSON', 'API'].map((format) => (
              <span key={format} className="px-4 py-2 rounded-lg bg-white shadow-sm text-sm font-medium text-foreground">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
