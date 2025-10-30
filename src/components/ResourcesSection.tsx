import { ExternalLink, Cpu, Box, Globe } from "lucide-react";

const resources = [
  {
    icon: Box,
    title: "TinkerCAD",
    description: "3D design and circuit simulation platform",
    url: "https://www.tinkercad.com",
    color: "text-[#FF5A5F]"
  },
  {
    icon: Cpu,
    title: "Wokwi Simulator",
    description: "Online electronics and IoT simulator",
    url: "https://wokwi.com",
    color: "text-accent"
  },
  {
    icon: Globe,
    title: "IEEE RAS",
    description: "Official IEEE Robotics & Automation Society",
    url: "https://ras.ieee.org",
    color: "text-primary"
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Tools & Platforms
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
          Essential resources for the event
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-card p-6 md:p-8 rounded-xl md:rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors ${resource.color}`}>
                <resource.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
                {resource.title}
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
