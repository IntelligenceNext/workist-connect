
import { Button } from "@/components/ui/button";
import { Award, Users, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("http://workistforit.in/images/Frame%201.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-150">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-300">
            <Globe className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
          About Workist For IT
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
        
        {/* Description */}
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mylapaka Narsimha"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-white leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl">
              Workist For IT was founded in 2017 by Mylapaka Narsimha, a visionary leader with a passion 
              for technology and business excellence. Our mission is to provide cost-effective IT solutions 
              and services that empower organizations to compete successfully in the market. By matching 
              skills with common goals, we enable people and organizations to effectively use technology 
              and achieve their full potential.
            </p>
            <Button 
              size="lg"
              className="mt-6 bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            >
              Learn More About Our Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
