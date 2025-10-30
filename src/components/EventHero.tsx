import { Sparkles } from "lucide-react";
import bannerImage from "@/assets/edith-banner.jpg";

const EventHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Banner image background */}
      <div className="absolute inset-0">
        <img 
          src={bannerImage} 
          alt="E.D.I.T.H 1.0 Event Banner with comic book collage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">IEEE RAS Presents</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              E.D.I.T.H 1.0
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore • Design • Innovate • Tinker • Hack
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A One-Day Technical Fest on Robotics, IoT & Embedded Systems
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-accent text-lg mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>7 November 2025</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <div>Atria Institute of Technology, Bengaluru</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
