
import { Button } from "@/components/ui/button";
import { Users, Heart } from "lucide-react";

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
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Born from a Cultural Shift
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
          Transform your organization's culture with our proven methodologies and expert guidance. 
          We help companies build stronger, more engaged teams and create lasting positive change.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
        >
          Start Your Cultural Journey
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
