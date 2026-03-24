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
    <section id="contact" className="w-full py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue gradient from top */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(30, 157, 241, 0.08), transparent 60%)",
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(30,157,241,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(30,157,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center" data-aos="fade-down" data-aos-duration="800">
          <Badge 
            variant="secondary" 
            className="mb-6 bg-gradient-to-r from-blue-50 to-blue-100/60 text-blue-700 border border-blue-200/60 px-4 py-2 text-sm font-semibold shadow-sm"
          >
            <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Us
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">Get in </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start monitoring your environment? We're here to help you get started.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="900">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">We'd love to hear from you. Choose your preferred way to get in touch.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <Card 
                  key={info.title} 
                  className="group hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100/50 bg-white relative overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/20 transition-all duration-300" />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                        <a 
                          href={info.link}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-words"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional trust section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/60">
              <h4 className="font-bold text-gray-900 mb-4">Why Contact Us?</h4>
              <ul className="space-y-3">
                {[
                  "24-hour response time guarantee",
                  "Expert consultation available",
                  "Custom solutions for your needs",
                  "Free demo and trial period"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card 
            data-aos="fade-left" 
            data-aos-duration="1000"
            className="shadow-2xl border-2 border-blue-100/50 bg-white relative overflow-hidden"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-gray-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-gray-900">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none"
                    placeholder="Tell us about your monitoring needs..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <span className="inline-flex items-center gap-2">
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}