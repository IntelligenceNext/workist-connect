
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/us/HeroSection";
import FootprintSection from "@/components/us/FootprintSection";
import CollaborationsSection from "@/components/us/CollaborationsSection";
import SolutionsSection from "@/components/us/SolutionsSection";
import SuccessSection from "@/components/us/SuccessSection";
import GetStartedSection from "@/components/us/GetStartedSection";

const US = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FootprintSection />
      <CollaborationsSection />
      <SolutionsSection />
      <SuccessSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default US;
