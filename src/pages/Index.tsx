import EventHero from "@/components/EventHero";
import AboutSection from "@/components/AboutSection";
import SpeakerSection from "@/components/SpeakerSection";
import SubEventsSection from "@/components/SubEventsSection";
import RegistrationSection from "@/components/RegistrationSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EventHero />
      <AboutSection />
      <SpeakerSection />
      <SubEventsSection />
      <RegistrationSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
