
import { Button } from "@/components/ui/button";
import { BoxesIcon, Truck, LineChart, Laptop, UsersRound } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <BoxesIcon className="h-6 w-6" />,
      title: "Warehouse Staffing",
      description: "Skilled workers for inventory management, order picking, and packing"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Transportation Experts",
      description: "Drivers, fleet managers, and logistics coordinators"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Supply Chain Professionals",
      description: "Specialists in procurement, planning, and vendor management"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Technology Integration",
      description: "Experts in warehouse automation, IoT, and logistics software"
    },
    {
      icon: <UsersRound className="h-6 w-6" />,
      title: "Leadership Talent",
      description: "Managers and executives to oversee operations and drive growth"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Tailored Workforce Solutions for Logistics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of staffing and workforce solutions to meet 
            the needs of the logistics and distribution industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#F97316] mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
          >
            Discover Our Workforce Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
