
import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, BarChart } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-150">
            <LineChart className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-300">
            <BarChart className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Staying Ahead with Market Trends
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl">
          In today's fast-paced business environment, staying informed about market trends 
          is crucial for success. At Workist For IT, we provide valuable insights into the 
          latest trends shaping industries worldwide. With collaborations with over 100 top 
          multinational companies (MNCs), we bring you data-driven analysis and actionable 
          strategies to help your business thrive.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto animate-pulse"
        >
          Explore Market Trends
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
