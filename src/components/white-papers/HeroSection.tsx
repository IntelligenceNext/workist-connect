
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-[15vh] pb-20 px-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-150">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm animate-float delay-300">
            <Brain className="h-8 w-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          In-Depth Research and Industry Insights
        </h1>
        
        <div className="w-32 h-1 bg-white rounded-full mx-auto mb-8" />
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          White papers are authoritative reports that provide in-depth research, analysis, and 
          insights into key industry trends, challenges, and solutions. At Workist For IT, we 
          collaborate with over 100 top multinational companies (MNCs) to deliver white papers 
          that empower businesses with actionable knowledge and strategic guidance.
        </p>

        <Button 
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
        >
          Explore White Papers
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
