import { Mail, Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 md:space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </h3>
            <a
              href="mailto:ieeeras.ait@gmail.com"
              className="inline-flex items-center gap-2 text-sm md:text-base text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              ieeeras.ait@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a
              href="https://ait.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
          </div>

          <div className="text-muted-foreground text-xs md:text-sm space-y-1 md:space-y-2">
            <p className="font-medium">
              © 2025 IEEE RAS – Atria Institute of Technology
            </p>
            <p className="text-[10px] md:text-xs">
              E.D.I.T.H 1.0 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
