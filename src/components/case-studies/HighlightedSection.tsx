
import { Button } from "@/components/ui/button";
import { Award, Target, ChartBar, ArrowRight } from "lucide-react";

const HighlightedSection = () => {
  const caseStudies = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Digital Transformation in Tech",
      description: "A tech company implemented digital transformation strategies, increasing operational efficiency by 25%.",
      impact: "25% efficiency increase"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Healthcare Innovation",
      description: "A healthcare provider improved patient care efficiency through workforce optimization.",
      impact: "30% efficiency improvement"
    },
    {
      icon: <ChartBar className="h-8 w-8 text-accent" />,
      title: "Manufacturing Excellence",
      description: "A manufacturing firm reduced production costs by adopting automation solutions.",
      impact: "20% cost reduction"
    }
  ];

  return (
    <section className="relative min-h-[600px] py-16 px-4 bg-[#040842] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Highlighted Case Studies
        </h2>

        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transition-transform hover:scale-105"
            >
              <div className="bg-primary/30 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {study.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {study.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {study.description}
              </p>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-accent font-semibold">
                  {study.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8 py-6 h-auto"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
