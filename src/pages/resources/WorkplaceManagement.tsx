
import HeroSection from "@/components/workplace-management/HeroSection";
import KeyComponentsSection from "@/components/workplace-management/KeyComponentsSection";
import BenefitsSection from "@/components/workplace-management/BenefitsSection";
import ExpertiseSection from "@/components/workplace-management/ExpertiseSection";
import CaseStudiesSection from "@/components/workplace-management/CaseStudiesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkplaceManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <KeyComponentsSection />
        <BenefitsSection />
        <ExpertiseSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default WorkplaceManagementPage;
