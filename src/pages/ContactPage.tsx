import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Headphones, Calendar, ExternalLink } from "lucide-react";

const quickLinks = [
  {
    icon: Headphones,
    title: "Remote Support",
    description: "Get immediate technical assistance",
    link: "#",
    linkText: "Start Session"
  },
  /*{
    icon: ExternalLink,
    title: "Customer Portal",
    description: "Access your account and resources",
    link: "#",
    linkText: "Login"
  },*/
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a consultation with our team",
    link: "#",
    linkText: "Book Now"
  }
];

const ContactPage = () => {
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
                Let's Simplify Your IT
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Reach out to schedule a consultation or get quick technical support.
              </p>
              <p className="text-lg text-muted-foreground italic">
                ¿Hablas español? Nuestro equipo también.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border bg-card hover:shadow-lg transition-all group">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {item.description}
                        </p>
                        <a href={item.link}>
                          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            {item.linkText}
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                </div>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a href="tel:+15203136002" className="text-muted-foreground hover:text-primary transition-colors">
                          +1(520) 313-6002
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:info@tekvian.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@tekvian.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">Nogales, Arizona</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Business Hours:</strong><br />
                      Monday - Friday: 8:00 AM - 6:00 PM MST<br />
                      24/7 Emergency Support Available
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Full Name *" 
                          className="bg-background" 
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Company Name *" 
                          className="bg-background"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          type="email" 
                          placeholder="Email Address *" 
                          className="bg-background"
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          type="tel" 
                          placeholder="Phone Number *" 
                          className="bg-background"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input 
                        placeholder="# of Devices/Users" 
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <Textarea 
                        placeholder="Tell us about your IT needs..." 
                        className="min-h-[150px] bg-background"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="mt-1"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I agree to receive communications from Tekvian Solutions regarding my inquiry.
                      </label>
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
