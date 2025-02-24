
import { Brain, TrendingUp, Lightbulb, BarChart3, Award } from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Expert Insights",
      description: "Gain access to research and analysis from industry experts."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Trend Analysis",
      description: "Stay updated on the latest trends and developments in your industry."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem-Solving",
      description: "Discover innovative solutions to complex challenges."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Strategic Planning",
      description: "Use data-driven insights to shape your business strategy."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Credibility",
      description: "Establish your organization as a thought leader by leveraging well-researched content."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why White Papers Matter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 bg-primary/5 p-4 rounded-full w-fit">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
