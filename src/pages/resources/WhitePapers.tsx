
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/white-papers/HeroSection";
import WhySection from "@/components/white-papers/WhySection";
import TopicsSection from "@/components/white-papers/TopicsSection";
import ExpertiseSection from "@/components/white-papers/ExpertiseSection";
import CaseStudiesSection from "@/components/white-papers/CaseStudiesSection";

const WhitePapers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <HeroSection />
            <WhySection />
            <TopicsSection />
            <ExpertiseSection />
            <CaseStudiesSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhitePapers;
