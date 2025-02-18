
import { Button } from "@/components/ui/button";
import { Building2, Users, Factory, Truck } from "lucide-react";

const CollaborationsSection = () => {
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology",
      description: "Partnering with leading tech giants to provide IT talent and innovation solutions.",
      gradient: "from-[#FF9933]/10 via-white to-[#138808]/10"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Healthcare",
      description: "Supporting hospitals, clinics, and pharmaceutical companies with skilled healthcare professionals.",
      gradient: "from-[#FF9933]/10 via-[#138808]/10 to-white"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Delivering workforce solutions to automotive, aerospace, and industrial manufacturers.",
      gradient: "from-white via-[#FF9933]/10 to-[#138808]/10"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Helping logistics and supply chain companies optimize operations with top-tier talent.",
      gradient: "from-[#138808]/10 via-[#FF9933]/10 to-white"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
          Trusted by 100+ Top Multinational Companies
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12 animate-fade-in delay-100">
          Workist For IT has earned the trust of over 100 top multinational companies (MNCs) across India. Our collaborations span various industries, delivering excellence in every sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${industry.gradient} backdrop-blur-sm animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/80 p-3 rounded-full w-fit mb-4 animate-float">
                <div className="text-[#FF9933]">{industry.icon}</div>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{industry.title}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg animate-pulse"
        >
          Learn About Our Collaborations
        </Button>
      </div>
    </section>
  );
};

export default CollaborationsSection;

