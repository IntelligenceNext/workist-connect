
import HeroSection from "@/components/market-trends/HeroSection";
import KeyTrendsSection from "@/components/market-trends/KeyTrendsSection";
import IndustryTrendsSection from "@/components/market-trends/IndustryTrendsSection";
import ExpertiseSection from "@/components/market-trends/ExpertiseSection";
import CaseStudiesSection from "@/components/market-trends/CaseStudiesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketTrendsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <KeyTrendsSection />
        <IndustryTrendsSection />
        <ExpertiseSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default MarketTrendsPage;
