
import HeroSection from "@/components/how-to-hire/HeroSection";
import KeyStepsSection from "@/components/how-to-hire/KeyStepsSection";
import EvaluationSection from "@/components/how-to-hire/EvaluationSection";
import ChallengesSection from "@/components/how-to-hire/ChallengesSection";
import ExpertiseSection from "@/components/how-to-hire/ExpertiseSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowToHire = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <KeyStepsSection />
      <EvaluationSection />
      <ChallengesSection />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default HowToHire;

