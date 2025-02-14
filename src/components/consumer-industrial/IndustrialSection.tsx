
import { Button } from "@/components/ui/button";
import { Factory, Truck, Settings, Shield } from "lucide-react";

const IndustrialSection = () => {
  const services = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Manufacturing Talent",
      description: "Engineers, technicians, and production managers for seamless operations"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Supply Chain Experts",
      description: "Professionals who streamline procurement, logistics, and distribution"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automation Specialists",
      description: "Experts in robotics, IoT, and smart manufacturing technologies"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety and Compliance Leaders",
      description: "Professionals ensuring adherence to industry regulations and standards"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Empowering the Industrial Sector
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The industrial sector demands precision, efficiency, and innovation. 
            Workist For IT delivers workforce solutions that help businesses achieve 
            operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[#F97316] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
          >
            Discover Industrial Workforce Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSection;
