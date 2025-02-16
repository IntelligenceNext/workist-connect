
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/government/HeroSection";
import ChallengesSection from "@/components/government/ChallengesSection";
import SolutionsSection from "@/components/government/SolutionsSection";
import ApproachSection from "@/components/government/ApproachSection";
import SuccessSection from "@/components/government/SuccessSection";
import GetStartedSection from "@/components/government/GetStartedSection";

const Government = () => {
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

export default Government;
