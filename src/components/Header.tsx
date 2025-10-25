import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-10 left-0 right-0 z-40 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="https://preview--msp-glow-up.lovable.app/assets/tekvian-logo-D9HGlYYa.png" 
            alt="Tekvian Solutions Logo" 
            className="h-10"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="/why-tekvian" className="text-foreground hover:text-primary transition-colors">
            Why Tekvian
          </a>          
          <a href="/resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="/contact">
            <Button variant="hero">Contact Us</Button>
          </a>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
