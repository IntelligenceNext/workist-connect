
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/executive/HeroSection";
import ExecutiveRoles from "@/components/executive/ExecutiveRoles";
import RecruitingProcess from "@/components/executive/RecruitingProcess";
import WhyChooseUs from "@/components/executive/WhyChooseUs";
import SuccessStories from "@/components/executive/SuccessStories";
import GetStarted from "@/components/executive/GetStarted";

const Executive = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ExecutiveRoles />
        <RecruitingProcess />
        <WhyChooseUs />
        <SuccessStories />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default Executive;
