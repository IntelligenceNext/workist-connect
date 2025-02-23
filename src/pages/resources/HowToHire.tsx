
import HeroSection from "@/components/how-to-hire/HeroSection";
import KeyStepsSection from "@/components/how-to-hire/KeyStepsSection";
import EvaluationSection from "@/components/how-to-hire/EvaluationSection";
import ChallengesSection from "@/components/how-to-hire/ChallengesSection";
import ExpertiseSection from "@/components/how-to-hire/ExpertiseSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowToHirePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <KeyStepsSection />
        <EvaluationSection />
        <ChallengesSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowToHirePage;
