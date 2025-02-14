
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/logistics/HeroSection";
import ChallengesSection from "@/components/logistics/ChallengesSection";
import SolutionsSection from "@/components/logistics/SolutionsSection";
import ApproachSection from "@/components/logistics/ApproachSection";
import SuccessSection from "@/components/logistics/SuccessSection";
import GetStartedSection from "@/components/logistics/GetStartedSection";

const Logistics = () => {
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

export default Logistics;
