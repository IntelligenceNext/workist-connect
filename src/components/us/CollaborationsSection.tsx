
import { Button } from "@/components/ui/button";
import { Building2, Users, Factory, Truck } from "lucide-react";

const CollaborationsSection = () => {
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology",
      description: "Partnering with leading tech giants to provide IT talent and innovation solutions.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Healthcare",
      description: "Supporting hospitals, clinics, and pharmaceutical companies with skilled healthcare professionals.",
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Delivering workforce solutions to automotive, aerospace, and industrial manufacturers.",
      gradient: "from-orange-500/10 to-amber-500/10"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Helping logistics and supply chain companies optimize operations with top-tier talent.",
      gradient: "from-purple-500/10 to-indigo-500/10"
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
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Trusted by 100+ Top Multinational Companies
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Workist For IT has earned the trust of over 100 top multinational companies (MNCs) across the United States. Our collaborations span industries such as:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${industry.gradient}`}
            >
              <div className="bg-white p-3 rounded-full w-fit mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-lg"
        >
          Learn About Our Collaborations
        </Button>
      </div>
    </section>
  );
};

export default CollaborationsSection;
