
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/executive/HeroSection";

const Executive = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Executive;
