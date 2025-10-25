import microsoftLogo from "@/assets/partners/microsoft.png";
import zoomLogo from "@/assets/partners/zoom.png";
import bitdefenderLogo from "@/assets/partners/bitdefender.png";
import sophosLogo from "@/assets/partners/sophos.png";
import proofpointLogo from "@/assets/partners/proofpoint.png";

const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Zoom", logo: zoomLogo },
  { name: "Bitdefender", logo: bitdefenderLogo },
  { name: "Sophos", logo: sophosLogo },
  { name: "Proofpoint", logo: proofpointLogo },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted Technology Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading technology providers to deliver best-in-class solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 rounded-lg bg-card border border-border hover:border-primary transition-all group min-h-[140px]"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                loading="lazy"
                className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Certified and authorized to deliver enterprise solutions from the world's leading technology companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
