import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground h-10 text-sm border-b border-border">
      <div className="container mx-auto px-4 h-full flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
        <a 
          href="https://tekvian.support" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary-foreground/80 hover:text-primary transition-colors"
        >
          Support Portal
        </a>
        <a 
          href="mailto:support@tekvian.com"
          className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          support@tekvian.com
        </a>
        <a 
          href="tel:+15203136002"
          className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          +1 (520) 313-6002
        </a>
      </div>
    </div>
  );
};

export default TopBar;
