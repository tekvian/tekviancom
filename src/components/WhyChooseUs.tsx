import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description: "Proven track record delivering IT solutions since 2010.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Specialized knowledge in logistics, produce, and professional services.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and rapid response to keep you operational.",
  },
  {
    icon: MapPin,
    title: "Local & Cross-Border",
    description: "Serving businesses in Nogales, Arizona and across the U.S.-Mexico border.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Tekvian Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than an IT provider—we're your strategic technology partner committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="text-center border-border bg-card">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            From small businesses to enterprise operations, Tekvian Solutions provides the IT infrastructure, 
            security, and support that keeps your business running smoothly. Our bilingual team understands 
            the unique challenges of cross-border commerce and delivers solutions that work for your operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
