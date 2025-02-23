
import { Users, LineChart, Settings, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Talent Sourcing",
      description: "Access to a vast network of qualified candidates across industries."
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "Assessment Tools",
      description: "Advanced tools and techniques to evaluate candidates effectively."
    },
    {
      icon: <LineChart className="h-8 w-8 text-accent" />,
      title: "Industry Insights",
      description: "Data-driven insights to align your hiring strategy with market trends."
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Customized Solutions",
      description: "Tailored hiring strategies to meet your organization's unique needs."
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "Best Practices",
      description: "Proven methodologies to ensure a seamless and efficient hiring process."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Expertise in Hiring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-block mb-4 bg-primary/5 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-lg px-8"
          >
            Get Started with Our Hiring Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
