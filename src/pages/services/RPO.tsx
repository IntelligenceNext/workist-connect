
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RPOHeroSection from "@/components/rpo/HeroSection";
import ServicesSection from "@/components/rpo/ServicesSection";
import ExpertsSection from "@/components/rpo/ExpertsSection";
import WarehouseSection from "@/components/rpo/WarehouseSection";
import ResultsSection from "@/components/rpo/ResultsSection";

const RPOServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <RPOHeroSection />
        <ServicesSection />
        <ExpertsSection />
        <WarehouseSection />
        <ResultsSection />
        
        <div className="bg-white text-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Transform Your Recruitment?
              </h2>
              <p className="mt-4 text-xl text-primary/80">
                Let's discuss how our RPO solutions can streamline your hiring process.
              </p>
              <div className="mt-8">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RPOServices;
