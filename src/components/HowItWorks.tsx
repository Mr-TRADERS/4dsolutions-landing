const steps = [
  { title: "Deploy Sensors", desc: "Connect certified sensors to your facilities and assets." },
  { title: "Stream Data", desc: "Data flows to EMS in real time via secure channels." },
  { title: "Detect & Alert", desc: "Rules trigger alerts and workflows when thresholds are exceeded." },
  { title: "Report & Comply", desc: "Generate insights and export audit-ready reports." },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border bg-card text-card-foreground p-6">
              <div className="text-muted-foreground text-sm">Step {i + 1}</div>
              <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


