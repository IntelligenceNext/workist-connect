
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/in-house/HeroSection";
import WhySection from "@/components/in-house/WhySection";
import OpportunitiesSection from "@/components/in-house/OpportunitiesSection";
import PeopleSection from "@/components/in-house/PeopleSection";
import TrainingSection from "@/components/in-house/TrainingSection";

const InHouse = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhySection />
      <OpportunitiesSection />
      <PeopleSection />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default InHouse;
