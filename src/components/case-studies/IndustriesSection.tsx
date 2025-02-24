
import { Laptop, Stethoscope, Factory, ShoppingCart, Truck } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Laptop className="h-12 w-12 text-primary" />,
      title: "Technology",
      description: "Success stories of digital transformation and innovation."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Healthcare",
      description: "Examples of improved patient care and operational efficiency."
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Manufacturing",
      description: "Case studies on automation and process optimization."
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "Retail",
      description: "Stories of enhanced customer experience and sales growth."
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Logistics",
      description: "Examples of supply chain optimization and cost reduction."
    }
  ];

  return (
    <section className="py-20 px-8 border-t border-gray-200 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Industries Covered in Our Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {industry.title}
              </h3>
              <p className="text-muted-foreground">
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
