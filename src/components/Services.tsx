import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Cloud, Phone, HardDrive, Package, Code } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    description: "Comprehensive IT management with RMM tools, on-site support, and SLA-backed service.",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Azure",
    description: "Expert deployment, migration, and ongoing management of Microsoft cloud platforms.",
  },
  {
    icon: Phone,
    title: "Zoom Phone Solutions",
    description: "Modern unified communications with Zoom Phone implementation and support.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Multi-layered protection with BitDefender, Proofpoint, Sophos, and security monitoring.",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description: "Business continuity planning with automated backups and rapid recovery solutions.",
  },
  {
    icon: Package,
    title: "Hardware-as-a-Service",
    description: "Workstation-as-a-Service (WaaS), Zebra handhelds, printers, and equipment lifecycle management.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored solutions including Tekvian WMS and ProduceTools QC for specialized operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From managed services to custom development, we provide the technology foundation your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="transition-all hover:shadow-lg border-border bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
