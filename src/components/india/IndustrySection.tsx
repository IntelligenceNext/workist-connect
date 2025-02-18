
import { Button } from "@/components/ui/button";
import { Monitor, Stethoscope, Factory, Truck, DollarSign } from "lucide-react";

const IndustrySection = () => {
  const industries = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Information Technology",
      description: "Skilled IT professionals for software development, cybersecurity, and more."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      description: "Doctors, nurses, and healthcare administrators."
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Manufacturing",
      description: "Engineers, technicians, and production managers."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics and Supply Chain",
      description: "Experts in transportation, warehousing, and distribution."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Finance and Banking",
      description: "Professionals for financial analysis, risk management, and customer service."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Serving All Major Industries in India
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12">
          Workist For IT provides workforce solutions across all major industries in India, delivering excellence in every sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray
        -100"
            >
              <div className="bg-[#FF9933]/10 p-3 rounded-lg w-fit mb-4">
                <div className="text-[#FF9933]">{industry.icon}</div>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{industry.title}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-[#138808] hover:bg-[#138808]/90 text-white shadow-lg"
        >
          Explore Our Industry Expertise
        </Button>
      </div>
    </section>
  );
};

export default IndustrySection;
