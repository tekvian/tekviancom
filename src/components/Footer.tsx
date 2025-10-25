const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://preview--msp-glow-up.lovable.app/assets/tekvian-logo-D9HGlYYa.png" 
              alt="Tekvian Solutions Logo" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 mb-4">
              Your trusted partner for managed IT services, cybersecurity, and custom software solutions in Nogales, Arizona and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/why-tekvian" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Why Tekvian
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/resources" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/remote-support" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Remote Support
                </a>
              </li>
              <li>
                <a href="/portal" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Customer Portal
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80">
            © {currentYear} Tekvian Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
