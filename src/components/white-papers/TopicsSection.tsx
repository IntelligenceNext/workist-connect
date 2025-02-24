
import { Laptop, Users, Leaf, LineChart, Target } from "lucide-react";

const TopicsSection = () => {
  const topics = [
    {
      icon: <Laptop className="h-12 w-12 text-white" />,
      title: "Digital Transformation",
      description: "Strategies for adopting and integrating new technologies."
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Workforce Management",
      description: "Best practices for talent acquisition, retention, and development."
    },
    {
      icon: <Leaf className="h-12 w-12 text-white" />,
      title: "Sustainability",
      description: "Insights into eco-friendly practices and green technologies."
    },
    {
      icon: <LineChart className="h-12 w-12 text-white" />,
      title: "Market Trends",
      description: "Analysis of emerging trends and their impact on businesses."
    },
    {
      icon: <Target className="h-12 w-12 text-white" />,
      title: "Operational Excellence",
      description: "Techniques for improving efficiency and productivity."
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Topics Covered in Our White Papers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors"
            >
              <div className="mb-6">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {topic.title}
              </h3>
              <p className="text-white/90">
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
