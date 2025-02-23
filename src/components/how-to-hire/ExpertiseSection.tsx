
import { Brain, Target, Users, Lightbulb } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "Market Analysis",
      description: "Deep understanding of market dynamics and trends across various industries."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Strategic Planning",
      description: "Development of actionable strategies based on market insights and data."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Industry Networks",
      description: "Strong connections with industry leaders and decision-makers worldwide."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Innovation Insights",
      description: "Keeping track of emerging technologies and innovative business models."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Market Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6"
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
      </div>
    </section>
  );
};

export default ExpertiseSection;
