import { Lightbulb, Wrench, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries in robotics and embedded systems"
  },
  {
    icon: Wrench,
    title: "Hands-On Learning",
    description: "Practical experience with cutting-edge technology"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Team-based challenges and networking opportunities"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          About the Main Event
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          E.D.I.T.H 1.0 brings together innovators, enthusiasts, and industry professionals for a day of learning 
          and hands-on exploration in Robotics, IoT, and Embedded Systems. Participants engage in talks, design 
          challenges, and live competitions that highlight creativity, teamwork, and technological excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
