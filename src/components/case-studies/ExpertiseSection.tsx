
import { FileText, Database, Target, Globe, Award } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Comprehensive Analysis",
      description: "Detailed examination of successful implementations."
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Data-Driven Insights",
      description: "Actionable recommendations based on real-world data."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Industry-Specific Focus",
      description: "Tailored case studies to address the unique needs of various sectors."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Thought Leadership",
      description: "Establishing your organization as a leader in your field."
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Global Perspective",
      description: "Insights from a global network of industry experts."
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Expertise in Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="bg-primary-dark p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/10"
            >
              <div className="mb-6 bg-white/5 p-4 rounded-full w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/80">
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
