import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-10 left-0 right-0 z-40 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://preview--msp-glow-up.lovable.app/assets/tekvian-logo-D9HGlYYa.png"
            alt="Tekvian Solutions Logo"
            className="h-10"
          />
        </Link>
       
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/why-tekvian" className="text-foreground hover:text-primary transition-colors">
            Why Tekvian
          </Link>
          <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
          <Link to="/contact">
            <Button variant="hero">Contact Us</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/why-tekvian" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Why Tekvian
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="hero" className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
