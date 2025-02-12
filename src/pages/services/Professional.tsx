
import HeroSection from "@/components/professional/HeroSection";
import ServicesSection from "@/components/professional/ServicesSection";
import AboutSection from "@/components/professional/AboutSection";
import ExpertiseSection from "@/components/professional/ExpertiseSection";
import SolutionsSection from "@/components/professional/SolutionsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Professional = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExpertiseSection />
        <SolutionsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
