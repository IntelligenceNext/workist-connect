
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Rocket } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Visionary CEO Placement",
      metric: "40% Revenue Increase",
      description: "Placed a visionary CEO for a mid-sized IT firm, resulting in significant growth"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Strategic CFO Success",
      metric: "20% Cost Reduction",
      description: "Recruited a CFO for a manufacturing company, streamlining operations"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovative CTO Impact",
      metric: "$10M Funding Secured",
      description: "Found a CTO for a startup, accelerating product development"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Success Stories: Leaders Who Transformed Businesses
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

export default SuccessStories;
