
import HeroSection from "@/components/professional/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Professional = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
