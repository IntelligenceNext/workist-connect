
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import ExpertiseSection from "@/components/about/ExpertiseSection";
import ValuesSection from "@/components/about/ValuesSection";
import JourneySection from "@/components/about/JourneySection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ExpertiseSection />
        <ValuesSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
