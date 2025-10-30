import { User, Clock } from "lucide-react";

const SpeakerSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Resource Person
        </h2>
        
        <div className="bg-gradient-card p-8 md:p-12 rounded-2xl border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-16 h-16 text-background" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">To Be Announced</h3>
              <p className="text-xl text-primary mb-4">Industry Expert – Robotics & Automation</p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium">Session: Minds in Motion | 9:30 AM – 10:30 AM</span>
              </div>
              
              <p className="text-muted-foreground mt-6">
                Join us for an insightful session covering robotics systems, simulation tools, and innovation 
                frameworks. Our expert speaker will share industry perspectives and emerging trends in automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
