import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const features = [
  { title: "Real-Time Monitoring", emoji: "🌍", desc: "Accurate live sensor data across air, water, and assets." },
  { title: "Data Visualization", emoji: "📊", desc: "Interactive dashboards and trends for faster decisions." },
  { title: "Smart Alerts", emoji: "🔔", desc: "Thresholds and anomaly detection with instant notifications." },
  { title: "Reliable & Secure", emoji: "🛡️", desc: "Enterprise-grade security and uptime for compliance." },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Why EMS</Badge>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Unified environmental monitoring that scales
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden>{f.emoji}</span>
                  {f.title}
                </CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg">Start Monitoring</Button>
        </div>
      </div>
    </section>
  )
}


