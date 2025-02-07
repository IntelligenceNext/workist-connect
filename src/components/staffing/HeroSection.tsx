
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative pt-[10%] bg-cover bg-center" style={{
      backgroundImage: 'url("https://workistforit.in/images/SemicircleGradient.png")',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-6">
              Staffing Agency Services
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
          </div>

          <div className="text-white text-center">
            <Calendar className="w-[43px] h-[50px] mx-auto text-white" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Schedule a meeting</h3>
            <p className="mb-0">
              Meet with our talent experts to
            </p>
            <p className="mb-4">
              discuss your staffing needs.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-[#e1691A] hover:bg-[#e1691A]/90 text-white"
            >
              Let's Connect
            </Button>
          </div>

          <div className="text-white text-center">
            <MessageSquare className="w-[63px] h-[50px] mx-auto text-white" />
            <h3 className="text-xl font-semibold mt-4 mb-2">Submit Staffing Request</h3>
            <p className="mb-0">
              Provide your information and
            </p>
            <p className="mb-4">
              we'll be in touch shortly!
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-[#e1691A] hover:bg-[#e1691A]/90 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
