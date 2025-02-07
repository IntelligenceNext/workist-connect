
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/staffing/HeroSection";
import TrustedBy from "@/components/staffing/TrustedBy";
import ProcessSection from "@/components/staffing/ProcessSection";
import IndustrySection from "@/components/staffing/IndustrySection";
import ContractTypes from "@/components/staffing/ContractTypes";
import HireSection from "@/components/staffing/HireSection";

const StaffingServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <HeroSection />
        <TrustedBy />
        
        {/* Job Seeker Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-6">
              Job seeker?
            </h2>
            <p className="text-center text-lg mb-8">
              We have resources, opportunities, and the expertise to get you started.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate("/find-a-job")}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        
        {/* Book a Demo Section */}
        <div className="py-20 bg-cover bg-center" style={{
          backgroundImage: 'url("https://workistforit.in/images/PinkGradient.webp")'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-8">
                  <strong>Book a free demo</strong> to see how we find and place talent
                </h2>
                
                <ul className="space-y-6 text-lg">
                  <li className="pb-6">
                    Set up a time with a Hiring Partner to walk through an overview of how we source great talent
                  </li>
                  <li className="py-4">
                    Discover how we make your hire even more productive once they start
                  </li>
                  <li className="py-4">
                    Understand pricing, timing, and how we partner with you every step of the way
                  </li>
                </ul>

                <div className="mt-12 mb-24">
                  <Button 
                    onClick={() => navigate("/book-demo")}
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/lovable-uploads/a873c66a-932f-4901-811b-8a9a4d734fcf.png"
                  alt="Advanced candidate selection interface showing multiple profiles"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <IndustrySection />
        <ProcessSection />
        <ContractTypes />
        <HireSection />

        <div className="bg-[#040842] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Build Your Team?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Let's discuss how we can help you find the perfect candidates.
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

export default StaffingServices;
