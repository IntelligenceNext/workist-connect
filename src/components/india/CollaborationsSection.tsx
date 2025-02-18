
import { Button } from "@/components/ui/button";
import { Building2, Users, Factory, Truck } from "lucide-react";

const CollaborationsSection = () => {
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology",
      description: "Partnering with leading tech giants to provide IT talent and innovation solutions.",
      color: "bg-[#FF9933]"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Healthcare",
      description: "Supporting hospitals, clinics, and pharmaceutical companies with skilled healthcare professionals.",
      color: "bg-[#138808]"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Delivering workforce solutions to automotive, aerospace, and industrial manufacturers.",
      color: "bg-[#FF9933]"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Helping logistics and supply chain companies optimize operations with top-tier talent.",
      color: "bg-[#138808]"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1A1F2C] pattern-grid-white/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Trusted by 100+ Top Multinational Companies
            </h2>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in delay-100">
              Our collaborations span various industries, delivering excellence in every sector.
            </p>
            <Button 
              size="lg"
              className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg animate-pulse"
            >
              Learn About Our Collaborations
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${industry.color}/10 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${industry.color}`}>{industry.icon}</div>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
