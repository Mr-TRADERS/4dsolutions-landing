import { ArrowRight, CheckCircle } from 'lucide-react';

const workflows = [
  {
    title: 'New Document Creation',
    description: 'From draft to approved in a structured, compliant process',
    steps: [
      { name: 'Draft Creation', detail: 'Author creates document using template, system assigns draft number' },
      { name: 'Initial Review', detail: 'Subject matter experts review content accuracy' },
      { name: 'QA Review', detail: 'Quality assurance validates compliance requirements' },
      { name: 'Approval Routing', detail: 'Document routed to designated approvers based on document type' },
      { name: 'Electronic Signature', detail: 'Approvers sign with meaning, timestamp, and authentication' },
      { name: 'Effective & Published', detail: 'Document becomes effective, obsoletes previous version' },
    ],
  },
  {
    title: 'Deviation Investigation',
    description: 'Systematic approach to identifying and addressing quality issues',
    steps: [
      { name: 'Event Capture', detail: 'Deviation logged with all relevant details and initial classification' },
      { name: 'Risk Assessment', detail: 'Impact evaluated across product, patient, and regulatory dimensions' },
      { name: 'Root Cause Analysis', detail: 'Investigation using structured tools (5 Whys, Fishbone, etc.)' },
      { name: 'CAPA Determination', detail: 'Decide if corrective/preventive actions are needed' },
      { name: 'Action Implementation', detail: 'Execute approved actions with documented evidence' },
      { name: 'Effectiveness Check', detail: 'Verify actions prevented recurrence over defined period' },
    ],
  },
  {
    title: 'Audit Response',
    description: 'Efficiently manage findings from receipt to closure',
    steps: [
      { name: 'Finding Receipt', detail: 'Audit observations logged with severity and category' },
      { name: 'Response Development', detail: 'Responsible party drafts corrective action plan' },
      { name: 'Internal Review', detail: 'QA and management approve response before submission' },
      { name: 'Response Submission', detail: 'Formal response sent to auditing body' },
      { name: 'Action Execution', detail: 'Committed actions tracked through completion' },
      { name: 'Closure Verification', detail: 'Evidence collected, finding closed with documentation' },
    ],
  },
];

const useCases = [
  {
    industry: 'Pharmaceutical Manufacturing',
    scenario: 'A large pharma company with 5 manufacturing sites needed to standardize quality processes and reduce deviation closure time.',
    solution: 'QualityFlow Pro unified document control across sites, automated deviation workflows, and provided real-time visibility.',
    results: ['45% faster deviation closure', '60% reduction in overdue CAPAs', 'Zero critical audit findings'],
  },
  {
    industry: 'Medical Device Development',
    scenario: 'A growing med-device company struggled with design control documentation and FDA submission readiness.',
    solution: 'Implemented structured design history file management with automated traceability matrices and submission packages.',
    results: ['FDA 510(k) approved first submission', '70% less time on DHF compilation', 'Complete design traceability'],
  },
  {
    industry: 'Biotech Research',
    scenario: 'A biotech firm needed to transition from paper-based lab notebooks to compliant electronic records.',
    solution: 'Deployed electronic lab notebook integration with full 21 CFR Part 11 compliance and data integrity controls.',
    results: ['100% paperless lab operations', '50% faster data retrieval', 'Audit-ready in 24 hours'],
  },
];

export const WorkflowsUseCases = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
            Workflows & Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See It in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Step-by-step workflows and real-world implementations that show how QualityFlow Pro fits into your daily operations.
          </p>
        </div>

        {/* Workflows */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Daily Workflows</h3>
          <div className="space-y-8">
            {workflows.map((workflow) => (
              <div key={workflow.title} className="glass-card rounded-2xl p-8">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-foreground">{workflow.title}</h4>
                  <p className="text-muted-foreground">{workflow.description}</p>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {workflow.steps.map((step, index) => (
                    <div key={step.name} className="relative">
                      <div className="bg-white rounded-xl p-4 h-full border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
                          <h5 className="font-semibold text-foreground text-sm">{step.name}</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">{step.detail}</p>
                      </div>
                      {index < workflow.steps.length - 1 && (
                        <ArrowRight className="hidden xl:block absolute top-1/2 -right-3 w-5 h-5 text-gray-300 -translate-y-1/2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Industry Use Cases</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.industry} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow">
                <div className="h-2 gradient-bg" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold mb-4">
                    {useCase.industry}
                  </span>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Challenge</h5>
                      <p className="text-sm text-foreground">{useCase.scenario}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Solution</h5>
                      <p className="text-sm text-foreground">{useCase.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Results</h5>
                    <ul className="space-y-2">
                      {useCase.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
