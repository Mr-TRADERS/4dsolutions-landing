import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react"

const contactInfo = [
  {
    icon: MailIcon,
    title: "Email",
    description: "Get in touch via email",
    value: "hello@4dsolutions.com",
    link: "mailto:hello@4dsolutions.com",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    description: "Speak with our team",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPinIcon,
    title: "Office",
    description: "Visit our headquarters",
    value: "123 Tech Street, San Francisco, CA 94105",
    link: "#",
  },
  {
    icon: ClockIcon,
    title: "Hours",
    description: "We're here to help",
    value: "Mon-Fri 9AM-6PM PST",
    link: "#",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-down" data-aos-duration="800">
          <Badge variant="secondary" className="mb-4 bg-[#1e9df1] text-white">Contact</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start monitoring your environment? We're here to help you get started.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right" data-aos-duration="900">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <Card 
                  key={info.title} 
                  className="hover:shadow-md transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                        <p className="text-sm font-medium mt-1">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card data-aos="fade-left" data-aos-duration="1000">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="Your Company"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="Tell us about your monitoring needs..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
