
import HeroSection from "@/components/be-the-light/HeroSection";
import WorkshopsSection from "@/components/be-the-light/WorkshopsSection";
import ConsultationsSection from "@/components/be-the-light/ConsultationsSection";
import NetworkingSection from "@/components/be-the-light/NetworkingSection";
import FAQSection from "@/components/be-the-light/FAQSection";

const BeTheLightPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkshopsSection />
      <ConsultationsSection />
      <NetworkingSection />
      <FAQSection />
    </div>
  );
};

export default BeTheLightPage;
