import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, Zap, Shield } from "lucide-react";
import agriImage from "@/assets/case-study-agri.jpg";
import warehouseImage from "@/assets/case-study-warehouse.jpg";
import communicationsImage from "@/assets/case-study-communications.jpg";

const caseStudies = [
  {
    company: "Agri-Packing",
    industry: "Agriculture & Logistics",
    image: agriImage,
    icon: TrendingDown,
    result: "25% Reduction in Downtime",
    description: "Tekvian's managed firewall and RMM solutions transformed Agri-Packing's IT infrastructure, dramatically reducing downtime and improving operational efficiency.",
    solutions: ["Managed Firewall", "RMM Monitoring", "24/7 Support"],
    color: "text-green-600"
  },
  {
    company: "Ciruli Brothers",
    industry: "Warehouse & Distribution",
    image: warehouseImage,
    icon: Zap,
    result: "Optimized Warehouse Automation",
    description: "Implementing Tekvian WMS and Zebra handhelds streamlined operations, improved inventory accuracy, and accelerated order fulfillment processes.",
    solutions: ["Tekvian WMS", "Zebra Handhelds", "Custom Integration"],
    color: "text-blue-600"
  },
  {
    company: "Fresh Produce Association",
    industry: "Agriculture & Trade",
    image: communicationsImage,
    icon: Shield,
    result: "Enhanced Security & Communications",
    description: "Migration to Zoom Phone and Microsoft 365 provided unified communications across multiple locations while strengthening security posture.",
    solutions: ["Zoom Phone", "Microsoft 365", "Cybersecurity"],
    color: "text-primary"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours transform their IT infrastructure and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden transition-all hover:shadow-xl border-border bg-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {study.industry}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl flex items-start justify-between">
                    {study.company}
                    <Icon className={`w-6 h-6 ${study.color} flex-shrink-0`} />
                  </CardTitle>
                  <CardDescription className={`text-lg font-semibold ${study.color}`}>
                    {study.result}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.solutions.map((solution, solutionIndex) => (
                      <Badge 
                        key={solutionIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {solution}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            View More Stories
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
