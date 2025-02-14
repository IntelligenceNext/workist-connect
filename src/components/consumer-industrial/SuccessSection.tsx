
import { Button } from "@/components/ui/button";
import { TrendingUp, ChartBar, Timer } from "lucide-react";

const SuccessSection = () => {
  const stories = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "E-commerce Growth",
      metric: "30% Increase",
      description: "Provided a retail chain with e-commerce specialists, boosting online sales"
    },
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Production Efficiency",
      metric: "25% Reduction",
      description: "Staffed a manufacturing plant with automation experts, reducing downtime"
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Supply Chain Optimization",
      metric: "20% Improvement",
      description: "Recruited supply chain leader, improving delivery efficiency"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Success Stories: Driving Growth in Consumer & Industrial Sectors
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
