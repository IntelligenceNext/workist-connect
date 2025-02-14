
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/consumer-industrial/HeroSection";
import ConsumerSection from "@/components/consumer-industrial/ConsumerSection";
import IndustrialSection from "@/components/consumer-industrial/IndustrialSection";
import ApproachSection from "@/components/consumer-industrial/ApproachSection";
import SuccessSection from "@/components/consumer-industrial/SuccessSection";
import GetStartedSection from "@/components/consumer-industrial/GetStartedSection";

const ConsumerIndustrial = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ConsumerSection />
        <IndustrialSection />
        <ApproachSection />
        <SuccessSection />
        <GetStartedSection />
      </div>
      <Footer />
    </div>
  );
};

export default ConsumerIndustrial;
