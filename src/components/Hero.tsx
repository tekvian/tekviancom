import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-datacenter.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 114, 206, 0.9), rgba(0, 114, 206, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
            <span className="text-primary-foreground/90 font-semibold">Trusted IT Partner Since 2010</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering Your Business with Secure, Reliable IT Solutions
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Your MSP partner for managed IT, Microsoft 365, Zoom Phone, cybersecurity, backup, and custom software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/contact#assessment">
              <Button variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90 shadow-xl">
                Get a Free IT Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/services">
              <Button variant="hero-outline" size="lg">
                Explore Services
              </Button>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Microsoft Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-lg text-primary-foreground/95 font-semibold">
                ✓ Trusted by companies across the U.S. and Mexico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
