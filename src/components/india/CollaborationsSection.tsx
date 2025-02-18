
import { Button } from "@/components/ui/button";
import { Building2, Users, Factory, Truck } from "lucide-react";

const CollaborationsSection = () => {
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology",
      description: "Partnering with leading tech giants to provide IT talent and innovation solutions.",
      gradient: "from-[#FF9933]/10 to-[#FF9933]/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Healthcare",
      description: "Supporting hospitals, clinics, and pharmaceutical companies with skilled healthcare professionals.",
      gradient: "from-[#138808]/10 to-[#138808]/20"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Delivering workforce solutions to automotive, aerospace, and industrial manufacturers.",
      gradient: "from-[#FF9933]/10 to-[#138808]/20"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Helping logistics and supply chain companies optimize operations with top-tier talent.",
      gradient: "from-[#138808]/10 to-[#FF9933]/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Trusted by 100+ Top Multinational Companies
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Workist For IT has earned the trust of over 100 top multinational companies (MNCs) across India. Our collaborations span various industries, delivering excellence in every sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${industry.gradient} backdrop-blur-sm`}
            >
              <div className="bg-white p-3 rounded-full w-fit mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{industry.title}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white shadow-lg"
        >
          Learn About Our Collaborations
        </Button>
      </div>
    </section>
  );
};

export default CollaborationsSection;
