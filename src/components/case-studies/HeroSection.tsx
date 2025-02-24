
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, ChartBar } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-150">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-300">
            <ChartBar className="h-8 w-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Real Success Stories and Implementation Examples
        </h1>
        
        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-8" />
        
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl">
          Case studies provide real-world examples of how businesses have successfully implemented 
          strategies and solutions to overcome challenges and achieve their goals. At Workist For IT, 
          we collaborate with over 100 top multinational companies (MNCs) to bring you inspiring success 
          stories that showcase the impact of effective workforce solutions. Explore our case studies 
          to gain insights and inspiration for your organization.
        </p>

        <Button 
          size="lg"
          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto animate-pulse"
        >
          Explore Our Case Studies
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
