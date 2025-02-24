
import { ArrowRight, Award, Target, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Digital Transformation in Healthcare",
      description: "How we helped a major healthcare provider modernize their IT infrastructure.",
      impact: "30% increase in operational efficiency"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "FinTech Innovation Strategy",
      description: "Developing a blockchain solution for a leading financial institution.",
      impact: "50% reduction in transaction processing time"
    },
    {
      icon: <ChartBar className="h-8 w-8 text-accent" />,
      title: "Manufacturing IoT Integration",
      description: "Implementing smart factory solutions for a global manufacturer.",
      impact: "25% improvement in production efficiency"
    }
  ];

  return (
    <section className="relative min-h-[600px] py-16 px-4 bg-[#040842] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("/lovable-uploads/71591d77-9fb5-4e1a-8d3d-6256f539a444.png")',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Real Success Stories and Implementation Examples
        </h2>

        {/* Decorative Line */}
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />
        
        <p className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          Case studies provide real-world examples of how businesses have successfully implemented 
          strategies and solutions to overcome challenges and achieve their goals. At Workist For IT, 
          we collaborate with over 100 top multinational companies (MNCs) to bring you inspiring success 
          stories that showcase the impact of effective workforce solutions.
        </p>

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
            Explore All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
