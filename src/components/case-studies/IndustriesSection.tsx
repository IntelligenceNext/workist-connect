
import { Laptop, Stethoscope, Factory, ShoppingCart, Truck } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Technology",
      description: "Success stories of digital transformation and innovation"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Healthcare",
      description: "Examples of improved patient care and operational efficiency"
    },
    {
      icon: <Factory className="h-8 w-8 text-white" />,
      title: "Manufacturing",
      description: "Case studies on automation and process optimization"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "Retail",
      description: "Stories of enhanced customer experience and sales growth"
    },
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Logistics",
      description: "Examples of supply chain optimization and cost reduction"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#040842] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Key Industries Covered in Our Case Studies
        </h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-[#1EAEDB] to-[#F97316] rounded-full mx-auto mb-12" />
        
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
          Our case studies span a wide range of industries, providing valuable insights 
          for various sectors. Explore success stories from leading organizations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="mb-4 bg-[#F97316] w-14 h-14 rounded-full flex items-center justify-center">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
