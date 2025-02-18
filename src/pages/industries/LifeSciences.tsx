
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/life-sciences/HeroSection";
import ChallengesSection from "@/components/life-sciences/ChallengesSection";
import SolutionsSection from "@/components/life-sciences/SolutionsSection";
import ApproachSection from "@/components/life-sciences/ApproachSection";
import SuccessSection from "@/components/life-sciences/SuccessSection";
import GetStartedSection from "@/components/life-sciences/GetStartedSection";

const LifeSciences = () => {
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

export default LifeSciences;
