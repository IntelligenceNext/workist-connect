
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Users, LineChart } from "lucide-react";

const ConsumerSection = () => {
  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Retail Talent",
      description: "Skilled professionals for store operations, merchandising, and customer experience"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-Commerce Experts",
      description: "Specialists in digital marketing, logistics, and online sales platforms"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Supply Chain Leaders",
      description: "Professionals who optimize inventory, distribution, and delivery processes"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Consumer Insights Analysts",
      description: "Experts who analyze market trends and customer behavior"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Transforming the Consumer Sector
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The consumer sector is evolving rapidly, driven by changing customer preferences 
            and technological advancements. Workist For IT helps businesses stay ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
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
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            Learn More About Consumer Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsumerSection;
