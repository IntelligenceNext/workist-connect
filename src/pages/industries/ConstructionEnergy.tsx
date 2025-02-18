
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/construction-energy/HeroSection";
import ChallengesSection from "@/components/construction-energy/ChallengesSection";
import SolutionsSection from "@/components/construction-energy/SolutionsSection";
import ApproachSection from "@/components/construction-energy/ApproachSection";
import SuccessSection from "@/components/construction-energy/SuccessSection";
import GetStartedSection from "@/components/construction-energy/GetStartedSection";

const ConstructionEnergy = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <ApproachSection />
        <SuccessSection />
        <GetStartedSection />
      </div>
      <Footer />
    </div>
  );
};

export default ConstructionEnergy;
