import { User, Clock } from "lucide-react";

const SpeakerSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Resource Person
        </h2>
        
        <div className="bg-gradient-card p-6 md:p-12 rounded-xl md:rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 md:w-16 md:h-16 text-background" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Subhadra Singh</h3>
              <p className="text-lg md:text-xl text-white mb-4">
  Industry Expert – Robotics & Automation
</p>
<p className="text-lg md:text-xl text-white mb-4">
  Senior Research Member Staff, Bharat Electronics
</p>
<p className="text-lg md:text-xl text-white mb-4">
  <a
    href="mailto:subhadrasingh@bel.co.in"
    className="underline hover:text-gray-300 transition-colors"
  >
    subhadrasingh@bel.co.in
  </a>
</p>

              <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 bg-accent/10 border border-accent/30 rounded-lg mb-4">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base text-accent font-medium">Minds in Motion | 9:30 - 10:30 AM</span>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground">
                Insightful session on robotics systems, simulation tools, and emerging trends in automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
