
import { Laptop, Users, Leaf, LineChart, Target } from "lucide-react";

const TopicsSection = () => {
  const topics = [
    {
      icon: <Laptop className="h-12 w-12 text-primary" />,
      title: "Digital Transformation",
      description: "Strategies for adopting and integrating new technologies."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Workforce Management",
      description: "Best practices for talent acquisition, retention, and development."
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Sustainability",
      description: "Insights into eco-friendly practices and green technologies."
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: "Market Trends",
      description: "Analysis of emerging trends and their impact on businesses."
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Operational Excellence",
      description: "Techniques for improving efficiency and productivity."
    }
  ];

  return (
    <section className="py-20 px-8 border-t border-gray-200 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Topics Covered in Our White Papers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {topic.title}
              </h3>
              <p className="text-muted-foreground">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
