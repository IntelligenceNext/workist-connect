
import { Button } from "@/components/ui/button";
import { MapPin, Building } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/90 to-[#138808]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-150">
            <Building className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empowering India's Workforce with Excellence
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#FF9933] to-[#138808] rounded-full mx-auto mb-8" />
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl">
          Workist For IT is proud to operate across India, delivering tailored workforce 
          solutions to businesses in every major industry. With a strong presence in key 
          cities and regions, we have collaborated with over 100 top multinational companies 
          (MNCs) and local enterprises to provide skilled talent, innovative staffing solutions, 
          and strategic workforce planning. Whether you're in IT, healthcare, manufacturing, 
          or logistics, we're here to support your growth and success.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white text-lg px-8 py-6 h-auto animate-pulse"
        >
          Explore Our India Operations
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

