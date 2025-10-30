import { Mail, Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </h3>
            <a
              href="mailto:ieeeras.ait@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              ieeeras.ait@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://ait.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-5 h-5 text-primary" />
            </a>
          </div>

          <div className="text-muted-foreground text-sm space-y-2">
            <p className="font-medium">
              © 2025 IEEE Student Branch – Robotics & Automation Society (RAS)
            </p>
            <p>Atria Institute of Technology</p>
            <p className="text-xs">
              Designed for E.D.I.T.H 1.0 | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
