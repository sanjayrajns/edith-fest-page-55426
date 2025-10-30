import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Wrench, Wifi, Zap } from "lucide-react";

const subEvents = [
  {
    icon: Brain,
    title: "Minds in Motion",
    subtitle: "Expert Talk & Interactive Session",
    time: "9:30 AM – 10:30 AM",
    venue: "Seminar Hall",
    highlights: [
      "Learn from industry experts in Robotics, AI, and Automation",
      "Explore simulation tools and innovation frameworks",
      "Q&A and career guidance opportunities"
    ],
    rules: [
      "Open to all registered participants.",
      "Maintain discipline and decorum.",
      "No recording devices without permission.",
      "Q&A only during the designated session.",
      "Certificates for attendees."
    ]
  },
  {
    icon: Wrench,
    title: "Tinkerthon",
    subtitle: "Hands-On Challenge",
    time: "10:45 AM – 1:15 PM",
    venue: "Computer Lab",
    highlights: [
      "Design and simulate IoT & Robotics prototypes using TinkerCAD and Wokwi in three progressive rounds: Easy, Medium, and Hard. Encourages innovation, creativity, and teamwork under mentorship."
    ],
    roundsOverview: [
      "Round 1 (Wokwi) – Easy: Basic circuit design",
      "Round 2 (TinkerCAD) – Medium: Automation or sensor-based project",
      "Round 3 (Wokwi) – Hard: System integration & simulation"
    ],
    rules: [
      "Individual registration; 2–3 member teams formed on spot.",
      "Bring laptops with internet access.",
      "Round themes revealed during the event.",
      "No pre-built or copied designs.",
      "Evaluation based on creativity, execution, and teamwork.",
      "Judges' decisions are final."
    ]
  },
  {
    icon: Wifi,
    title: "RoboConnect",
    subtitle: "Demo & Quiz",
    time: "2:00 PM – 2:15 PM",
    venue: "Robotics Lab",
    highlights: [
      "Live Scorer Bot demonstration",
      "Quick quiz on Robotics, IoT, and Embedded Systems",
      "Interaction with IEEE-RAS coordinators"
    ],
    rules: [
      "Open to all registered participants.",
      "Quiz is individual.",
      "No mobile phones during quiz.",
      "Maintain decorum during demo.",
      "Winners decided by accuracy and speed."
    ]
  },
  {
    icon: Zap,
    title: "Bot Battle Zone",
    subtitle: "Robo Soccer Competition",
    time: "2:15 PM – 2:45 PM",
    venue: "Robotics Arena",
    highlights: [
      "Players compete in Robo Soccer using bots provided by the organizers – testing control, coordination, and strategy."
    ],
    rules: [
      "Bots provided by IEEE-RAS.",
      "Two-player teams per match.",
      "Handle bots carefully; intentional damage leads to disqualification.",
      "Highest score wins.",
      "Referee decisions final."
    ]
  }
];

const SubEventsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Sub-Events
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Explore our exciting lineup of technical challenges and interactive sessions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {subEvents.map((event, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/50 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.subtitle}</p>
                  </div>
                </div>

                {/* Time and Venue */}
                <div className="space-y-1 mb-4 text-sm">
                  <p className="text-foreground"><span className="font-semibold">Time:</span> {event.time}</p>
                  <p className="text-foreground"><span className="font-semibold">Venue:</span> {event.venue}</p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Highlights:</h4>
                  <ul className="space-y-1.5">
                    {event.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rounds Overview for Tinkerthon */}
                {event.roundsOverview && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Rounds Overview:</h4>
                    <ul className="space-y-1.5">
                      {event.roundsOverview.map((round, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-cyan-400 mt-1">▪</span>
                          <span>{round}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Accordion for Rules */}
                <Accordion type="single" collapsible>
                  <AccordionItem value={`rules-${index}`} className="border-0">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline border-2 border-cyan-500/50 rounded-lg hover:border-cyan-400 transition-colors">
                      <span className="text-sm font-medium text-cyan-400">View Rules & Guidelines</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4">
                      <ul className="space-y-2">
                        {event.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubEventsSection;
