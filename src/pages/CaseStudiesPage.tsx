import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Package, Shield } from "lucide-react";
import agriImage from "@/assets/case-study-agri.jpg";
import warehouseImage from "@/assets/case-study-warehouse.jpg";
import communicationsImage from "@/assets/case-study-communications.jpg";

const caseStudies = [
  {
    image: agriImage,
    icon: TrendingDown,
    title: "Agri-Packing",
    summary: "25% downtime reduction via managed firewall + RMM.",
    challenge: "Frequent network disruptions impacting production schedules",
    solution: "Implemented Sophos XGS firewall with NinjaOne RMM for proactive monitoring",
    results: [
      "25% reduction in downtime",
      "Improved network security posture",
      "Faster issue resolution with automated alerts"
    ]
  },
  {
    image: warehouseImage,
    icon: Package,
    title: "Ciruli Brothers",
    summary: "Warehouse automation with Tekvian WMS & Zebra.",
    challenge: "Manual processes causing inventory errors and delays",
    solution: "Deployed Tekvian WMS with Zebra handhelds and integrated workflows",
    results: [
      "Eliminated manual data entry errors",
      "Real-time inventory visibility",
      "30% improvement in picking efficiency"
    ]
  },
  {
    image: communicationsImage,
    icon: Shield,
    title: "Fresh Produce Association",
    summary: "Zoom Phone + M365 security uplift.",
    challenge: "Outdated phone system and inconsistent security across locations",
    solution: "Migrated to Zoom Phone and hardened Microsoft 365 with Defender",
    results: [
      "Unified communications across all offices",
      "Enhanced email security with phishing protection",
      "Cost savings from consolidated licensing"
    ]
  }
];

const CaseStudiesPage = () => {
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
                Success Stories
              </h1>
              <p className="text-xl text-muted-foreground">
                Real results from businesses that partnered with Tekvian to transform their IT operations.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <Card 
                    key={index} 
                    className="overflow-hidden border-border bg-card hover:shadow-xl transition-all"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div 
                        className="h-64 lg:h-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${study.image})` }}
                      />
                      
                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-3xl">{study.title}</CardTitle>
                        </div>
                        
                        <CardDescription className="text-lg mb-6">
                          {study.summary}
                        </CardDescription>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                            <p className="text-muted-foreground">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                            <p className="text-muted-foreground">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Results</h4>
                            <ul className="space-y-2">
                              {study.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start gap-2">
                                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how Tekvian can help transform your IT operations.
              </p>
              <a href="/contact#assessment">
                <Button variant="hero" size="lg" className="text-lg px-10">
                  Schedule Your Consultation
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

export default CaseStudiesPage;
