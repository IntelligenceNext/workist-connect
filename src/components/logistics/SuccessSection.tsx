
import { Button } from "@/components/ui/button";
import { Timer, TrendingUp, DollarSign } from "lucide-react";

const SuccessSection = () => {
  const stories = [
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Order Processing",
      metric: "30% Faster",
      description: "Provided a distribution center with warehouse staff, reducing processing time"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Delivery Efficiency",
      metric: "25% Improvement",
      description: "Recruited fleet manager for transportation company, boosting efficiency"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Reduction",
      metric: "20% Savings",
      description: "Staffed supply chain team for retail logistics, optimizing costs"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Success Stories: Driving Efficiency in Logistics
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-[#F97316] mb-6">{story.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {story.title}
              </h3>
              <div className="text-2xl font-bold text-[#F97316] mb-4">
                {story.metric}
              </div>
              <p className="text-gray-600">{story.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
