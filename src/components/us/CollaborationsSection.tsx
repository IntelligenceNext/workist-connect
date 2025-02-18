
import { Button } from "@/components/ui/button";
import { Building2, Heartbeat, Factory, Truck } from "lucide-react";

const CollaborationsSection = () => {
  const industries = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Technology",
      description: "Partnering with leading tech giants to provide IT talent and innovation solutions."
    },
    {
      icon: <Heartbeat className="h-8 w-8" />,
      title: "Healthcare",
      description: "Supporting hospitals, clinics, and pharmaceutical companies with skilled healthcare professionals."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Delivering workforce solutions to automotive, aerospace, and industrial manufacturers."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Helping logistics and supply chain companies optimize operations with top-tier talent."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Trusted by 100+ Top Multinational Companies
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Workist For IT has earned the trust of over 100 top multinational companies (MNCs) across the United States. Our collaborations span industries such as:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Learn About Our Collaborations
        </Button>
      </div>
    </section>
  );
};

export default CollaborationsSection;
