
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/culture/HeroSection";
import WorkshopSection from "@/components/culture/WorkshopSection";
import CultureSection from "@/components/culture/CultureSection";
import LeadershipSection from "@/components/culture/LeadershipSection";
import TeamSection from "@/components/culture/TeamSection";
import TrustSection from "@/components/culture/TrustSection";
import ResourcesSection from "@/components/culture/ResourcesSection";
import TalentSection from "@/components/culture/TalentSection";

const CultureConsulting = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <WorkshopSection />
        <CultureSection />
        <LeadershipSection />
        <TeamSection />
        <TrustSection />
        <ResourcesSection />
        <TalentSection />
      </div>
      <Footer />
    </div>
  );
};

export default CultureConsulting;
