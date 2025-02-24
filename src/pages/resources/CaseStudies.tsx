
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/case-studies/HeroSection";
import WhySection from "@/components/case-studies/WhySection";
import IndustriesSection from "@/components/case-studies/IndustriesSection";
import ExpertiseSection from "@/components/case-studies/ExpertiseSection";
import HighlightedSection from "@/components/case-studies/HighlightedSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <IndustriesSection />
        <ExpertiseSection />
        <HighlightedSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
