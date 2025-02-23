
import { BarChart, LineChart, TrendingUp, Users } from "lucide-react";

const KeyTrendsSection = () => {
  const trends = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Digital Transformation",
      description: "Acceleration of digital adoption across industries, with emphasis on cloud computing and AI integration."
    },
    {
      icon: <LineChart className="h-8 w-8 text-accent" />,
      title: "Remote Work Evolution",
      description: "Continued growth in hybrid work models, requiring advanced collaboration tools and cybersecurity measures."
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      title: "Data Analytics",
      description: "Increasing focus on real-time analytics and predictive modeling for better business decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Workforce Dynamics",
      description: "Shift towards skill-based hiring and emphasis on continuous learning and development."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Market Trends
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trends.map((trend, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-primary/5 p-4 rounded-full w-fit">
                {trend.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {trend.title}
              </h3>
              <p className="text-muted">
                {trend.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTrendsSection;
