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
      "Learn from industry experts in <strong>Robotics</strong>, <strong>AI</strong>, and <strong>Automation</strong>",
      "Explore <strong>simulation tools</strong> and innovation frameworks",
      "<strong>Q&A</strong> and career guidance opportunities"
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
    venue: "Seminar Hall",
    highlights: [
      "Design and simulate <strong>IoT & Robotics</strong> prototypes using <strong>TinkerCAD</strong> and <strong>Wokwi</strong> in three progressive rounds: Easy, Medium, and Hard. Encourages innovation, creativity, and teamwork under mentorship."
    ],
    roundsOverview: [
      "<strong>Round 1</strong> (Wokwi) – Easy: Basic circuit design",
      "<strong>Round 2</strong> (TinkerCAD) – Medium: Automation or sensor-based project",
      "<strong>Round 3</strong> (Wokwi) – Hard: System integration & simulation"
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
    venue: "Seminar Hall",
    highlights: [
      "Live <strong>Scorer Bot</strong> demonstration",
      "Quick quiz on <strong>Robotics</strong>, <strong>IoT</strong>, and <strong>Embedded Systems</strong>",
      "Interaction with <strong>IEEE-RAS</strong> coordinators"
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
    venue: "Seminar Hall",
    highlights: [
      "Players compete in <strong>Robo Soccer</strong> using bots provided by the organizers – testing <strong>control</strong>, <strong>coordination</strong>, and <strong>strategy</strong>."
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
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Sub-Events
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
          Technical challenges and interactive sessions
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {subEvents.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-xl md:rounded-2xl border-2 border-cyan-500/40 overflow-hidden hover:border-cyan-400 hover:shadow-[0_8px_40px_rgba(6,182,212,0.4)] transition-all duration-500 animate-slide-up hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-4 md:p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow duration-300">
                    <event.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-0.5 md:mb-1">{event.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{event.subtitle}</p>
                  </div>
                </div>

                {/* Time and Venue */}
                <div className="space-y-0.5 md:space-y-1 mb-3 md:mb-4 text-xs md:text-sm">
                  <p className="text-foreground"><span className="font-semibold">Time:</span> {event.time}</p>
                  <p className="text-foreground"><span className="font-semibold">Venue:</span> {event.venue}</p>
                </div>

                {/* Highlights */}
                <div className="mb-3 md:mb-4">
                  <h4 className="text-xs md:text-sm font-semibold text-cyan-400 mb-1.5 md:mb-2">Highlights:</h4>
                  <ul className="space-y-1 md:space-y-1.5">
                    {event.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                        <span className="text-cyan-400 mt-0.5 md:mt-1 flex-shrink-0">•</span>
                        <span className="flex-1" dangerouslySetInnerHTML={{ __html: highlight }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rounds Overview for Tinkerthon */}
                {event.roundsOverview && (
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-xs md:text-sm font-semibold text-cyan-400 mb-1.5 md:mb-2">Rounds:</h4>
                    <ul className="space-y-1 md:space-y-1.5">
                      {event.roundsOverview.map((round, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                          <span className="text-cyan-400 mt-0.5 md:mt-1 flex-shrink-0">▪</span>
                          <span className="flex-1" dangerouslySetInnerHTML={{ __html: round }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Accordion for Rules */}
                <Accordion type="single" collapsible>
                  <AccordionItem value={`rules-${index}`} className="border-0">
                    <AccordionTrigger className="px-3 py-2 md:px-4 md:py-3 hover:no-underline border-2 border-cyan-500/50 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <span className="text-xs md:text-sm font-medium text-cyan-400 group-hover:text-cyan-300">View Rules</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 md:px-4 pt-3 md:pt-4">
                      <ul className="space-y-1.5 md:space-y-2">
                        {event.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <span className="text-cyan-400 mt-0.5 md:mt-1 flex-shrink-0">•</span>
                            <span className="flex-1">{rule}</span>
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
