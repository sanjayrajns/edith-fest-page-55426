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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Tools & Platforms Used
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Essential resources for your technical journey
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${resource.color}`}>
                <resource.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {resource.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
