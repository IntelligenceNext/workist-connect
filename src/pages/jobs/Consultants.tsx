
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/consultants/HeroSection";
import FAQSection from "@/components/consultants/FAQSection";
import GettingStartedSection from "@/components/consultants/GettingStartedSection";
import FamilyFoundationSection from "@/components/consultants/FamilyFoundationSection";
import LoveSection from "@/components/consultants/LoveSection";
import BlogSection from "@/components/consultants/BlogSection";

const Consultants = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FAQSection />
      <GettingStartedSection />
      <FamilyFoundationSection />
      <LoveSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Consultants;
