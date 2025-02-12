
import HeroSection from "@/components/professional/HeroSection";
import ServicesSection from "@/components/professional/ServicesSection";
import AboutSection from "@/components/professional/AboutSection";
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
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
