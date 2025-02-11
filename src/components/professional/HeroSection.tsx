
import { Button } from "@/components/ui/button";
import { Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Monitor className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Users className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Tech and Talent Transformed
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Evergreen delivers world-class professional services to clients around the globe 
          to power innovation and transformation. Grow with us.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services/tech">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              Tech Services
            </Button>
          </Link>
          <Link to="/services/talent">
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              Talent Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
