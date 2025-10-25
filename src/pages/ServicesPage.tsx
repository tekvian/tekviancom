import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Phone, Shield, HardDrive, Package, Code, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    description: "Comprehensive IT management with RMM tools, on-site support, and SLA-backed service.",
    features: [
      "24/7 monitoring and proactive patching",
      "Remote support and troubleshooting",
      "SLA-driven response times",
      "Automated issue resolution via NinjaOne",
      "Regular system maintenance and updates"
    ]
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Azure",
    description: "Expert deployment, migration, and ongoing management of Microsoft cloud platforms.",
    features: [
      "User and license management",
      "Security configuration and Defender setup",
      "Automated backup solutions",
      "Migration and compliance consulting",
      "Azure infrastructure management"
    ]
  },
  {
    icon: Phone,
    title: "Zoom Phone & Communications",
    description: "Modern unified communications with Zoom Phone implementation and support.",
    features: [
      "Migration from RingCentral and legacy systems",
      "Call queues and auto attendants",
      "Multi-location unified communications",
      "Comprehensive staff training",
      "Ongoing technical support"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Multi-layered protection with industry-leading security tools and monitoring.",
    features: [
      "EDR/MDR with BitDefender",
      "Sophos XGS firewall management",
      "Proofpoint email security",
      "Phishing and impersonation protection",
      "Security awareness training"
    ]
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description: "Business continuity planning with automated backups and rapid recovery solutions.",
    features: [
      "Cloud backup solutions",
      "Microsoft 365 backup and recovery",
      "File and folder restoration",
      "Endpoint recovery services",
      "Disaster recovery planning"
    ]
  },
  {
    icon: Package,
    title: "Hardware-as-a-Service (WaaS)",
    description: "Flexible hardware solutions with predictable monthly costs and lifecycle management.",
    features: [
      "Tekvian Workstation-as-a-Service",
      "Zebra handhelds with warranty",
      "Printer and equipment leasing",
      "Replacement and upgrade services",
      "Predictable monthly budgeting"
    ]
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored applications designed for your specific industry needs.",
    features: [
      "Tekvian WMS for warehouse operations",
      "ProduceTools QC for quality control",
      "Custom business process automation",
      "Integration with existing systems",
      "Ongoing support and enhancements"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main className="pt-[106px]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From managed services to custom development, we provide the complete technology foundation your business needs to thrive in today's digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="transition-all hover:shadow-xl border-border bg-card"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let us create a custom managed IT plan tailored to your business needs. Schedule your free consultation today.
              </p>
              <a href="/#contact">
                <Button variant="hero" size="lg" className="text-lg px-10">
                  Request a Managed IT Plan Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
