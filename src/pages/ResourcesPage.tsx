import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const resources = [
  {
    title: "RingCentral vs. Zoom Phone: Why Switch",
    summary: "Discover what you gain by consolidating on Zoom—unified communications, better integrations, and simplified management.",
    category: "Communications",
    readTime: "5 min read"
  },
  {
    title: "Managed IT vs Pay-Per-Incident",
    summary: "Learn how managed IT delivers stability, predictability, and cost control compared to reactive break-fix support.",
    category: "IT Strategy",
    readTime: "7 min read"
  },
  {
    title: "NinjaOne vs. Intune: Which Is Right for Your Devices?",
    summary: "A practical comparison of endpoint management platforms to help you choose the best fit for your environment.",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    title: "Cybersecurity Essentials for Produce Operations",
    summary: "Protect your business from ransomware and data breaches with layered security designed for the produce industry.",
    category: "Security",
    readTime: "8 min read"
  },
  {
    title: "The True Cost of IT Downtime",
    summary: "Calculate the impact of system outages on your revenue, productivity, and reputation—and how to prevent them.",
    category: "Business",
    readTime: "5 min read"
  },
  {
    title: "Microsoft 365 Backup Best Practices",
    summary: "Why native M365 retention isn't enough and how third-party backup protects your data from deletion and ransomware.",
    category: "Cloud",
    readTime: "6 min read"
  }
];

const ResourcesPage = () => {
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
                Resources & Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Practical guides and articles to help you make informed IT decisions for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <Card 
                    key={index} 
                    className="border-border bg-card hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          {resource.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {resource.readTime}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4">
                        {resource.summary}
                      </CardDescription>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Have Questions About Your IT Strategy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is here to help you navigate your technology decisions.
              </p>
              <a href="/contact#assessment">
                <Button variant="hero" size="lg" className="text-lg px-10">
                  Talk to an Expert
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

export default ResourcesPage;
