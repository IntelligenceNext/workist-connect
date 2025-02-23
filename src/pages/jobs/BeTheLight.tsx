
import HeroSection from "@/components/be-the-light/HeroSection";
import WorkshopsSection from "@/components/be-the-light/WorkshopsSection";
import ConsultationsSection from "@/components/be-the-light/ConsultationsSection";
import NetworkingSection from "@/components/be-the-light/NetworkingSection";
import FAQSection from "@/components/be-the-light/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BeTheLightPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WorkshopsSection />
        <ConsultationsSection />
        <NetworkingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default BeTheLightPage;

