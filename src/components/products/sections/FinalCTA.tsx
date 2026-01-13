import { Button } from '@/components/products/ui/button';
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';

const benefits = [
  'Personalized demo tailored to your industry',
  'See your use cases in action',
  'Get pricing customized to your needs',
  'No obligation, no pressure',
];

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
              Start Your Journey
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your<br />
              <span className="gradient-text">Business?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have modernized their quality management with QualityFlow Pro. 
              See the platform in action with a personalized demo.
            </p>

            {/* Benefits list */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Schedule Your Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Phone className="w-5 h-5" />
                Talk to Sales
              </Button>
            </div>
          </div>

          {/* Contact options */}
         {/* Contact options */}
         <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-card text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-1">Email Us</h4>
              <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
              <a href="mailto:sales@qualityflow.com" className="text-primary font-medium hover:underline">
                sales@qualityflow.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-1">Call Us</h4>
              <p className="text-sm text-muted-foreground mb-2">Mon-Fri, 9am-6pm EST</p>
              <a href="tel:+1-800-555-0123" className="text-primary font-medium hover:underline">
                +1 (800) 555-0123
              </a>
            </div>
          </div>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            🔒 Your data is secure. We never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};
