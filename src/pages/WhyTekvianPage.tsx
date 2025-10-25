import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Briefcase, Globe, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Proactive & Fast",
    description: "Automation-first monitoring with clear SLAs."
  },
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "Deep experience in produce and logistics operations."
  },
  {
    icon: Globe,
    title: "Bilingual Support",
    description: "English & Spanish teams serving U.S. and Mexico."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Predictable managed plans and HaaS options."
  }
];

const comparisonData = [
  {
    capability: "Monitoring & Automation",
    tekvian: "Included",
    traditional: "Limited/Reactive"
  },
  {
    capability: "Response Times",
    tekvian: "SLA-driven",
    traditional: "Ad-hoc"
  },
  {
    capability: "Security Stack",
    tekvian: "BitDefender + Sophos + Proofpoint",
    traditional: "Varies"
  },
  {
    capability: "Bilingual Support",
    tekvian: "Yes",
    traditional: "Rare"
  },
  {
    capability: "Industry Fit",
    tekvian: "Produce/Logistics specialist",
    traditional: "Generalist"
  }
];

const WhyTekvianPage = () => {
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
                Why Choose Tekvian
              </h1>
              <p className="text-xl text-muted-foreground">
                Experience the difference of working with an MSP that understands your industry and delivers results.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <Card key={index} className="border-border bg-card text-center hover:shadow-lg transition-all">
                      <CardContent className="pt-6">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Tekvian vs. Traditional IT
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how we compare to traditional IT service providers.
                </p>
              </div>

              <Card className="border-border bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                        <th className="text-left p-4 font-semibold text-primary">Tekvian</th>
                        <th className="text-left p-4 font-semibold text-muted-foreground">Traditional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">{row.capability}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{row.tekvian}</span>
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{row.traditional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                See How Tekvian Compares for Your Environment
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let us show you the difference our industry expertise and proactive approach can make.
              </p>
              <a href="/contact#assessment">
                <Button variant="hero" size="lg" className="text-lg px-10">
                  Request Assessment
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

export default WhyTekvianPage;
