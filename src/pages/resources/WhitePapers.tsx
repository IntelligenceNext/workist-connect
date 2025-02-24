
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/white-papers/HeroSection";
import WhySection from "@/components/white-papers/WhySection";
import TopicsSection from "@/components/white-papers/TopicsSection";
import ExpertiseSection from "@/components/white-papers/ExpertiseSection";
import CaseStudiesSection from "@/components/white-papers/CaseStudiesSection";

const WhitePapers = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <div className="h-full">
          <HeroSection />
          <WhySection />
          <TopicsSection />
          <ExpertiseSection />
          <CaseStudiesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhitePapers;

