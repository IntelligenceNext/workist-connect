
import HeroSection from "@/components/workplace-management/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkplaceManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default WorkplaceManagementPage;

